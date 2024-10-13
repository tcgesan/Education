
        const messages = document.getElementById('messages');
        const userInput = document.getElementById('userInput');
        const sendBtn = document.getElementById('sendBtn');
        const deleteBtn = document.getElementById('deleteBtn');

        // Profile pictures
        const userPic = 'add.avif'; // User image URL
        const botPic = 'gpp.webp'; // Bot image URL

        sendBtn.addEventListener('click', sendMessage);
        deleteBtn.addEventListener('click', deleteChat);

        function sendMessage() {
            const userText = userInput.value.trim();
            if (userText) {
                addMessage(' '+ userText, 'user');
                userInput.value = '';
                getBotResponse(userText);
            }
        }

        function addMessage(text, sender) {
            const messageElement = document.createElement('div');
            messageElement.className = sender === 'user' ? 'user-message' : 'bot-message';

            const profilePic = document.createElement('img');
            profilePic.src = sender === 'user' ? userPic : botPic;
            profilePic.className = 'profile-pic';

            const messageText = document.createElement('div');
            messageText.className = 'message-text';
            messageText.textContent = text;

            messageElement.appendChild(profilePic);
            messageElement.appendChild(messageText);
            messages.appendChild(messageElement);

            // Animation
            requestAnimationFrame(() => {
                messageElement.style.opacity = 1;
                messageElement.style.transform = 'translateY(0)';
            });

            messages.scrollTop = messages.scrollHeight; // Scroll to the bottom
        }

        function getBotResponse(userText) {
            let botResponse = '';

            // Check for teach, edit, or remove commands
            if (userText.toLowerCase().startsWith('teach:')) {
                const teaching = userText.slice(6).trim();
                botResponse = storeKnowledge(teaching);
            } else if (userText.toLowerCase().startsWith('edit:')) {
                const editing = userText.slice(5).trim();
                botResponse = editKnowledge(editing);
            } else if (userText.toLowerCase().startsWith('remove:')) {
                const removal = userText.slice(7).trim();
                botResponse = removeKnowledge(removal);
            } 
            // Get knowledge if it exists
            else {
                const knowledge = getKnowledge(userText);
                botResponse = knowledge || checkSimilarity(userText) || `I don't know that at this time, Ethun still Trainning Me . Thank You ! 😊`;
            }

            addMessage(botResponse, 'bot');
        }

        function storeKnowledge(teaching) {
            const parts = teaching.split('-').map(part => part.trim());
            if (parts.length === 2) {
                const question = normalizeString(parts[0]); // Normalize question
                const answer = parts[1];
                let knowledge = JSON.parse(localStorage.getItem('knowledge')) || {};

                // Check if the question already exists
                if (knowledge[question]) {
                    return ` I already know this.😁`;
                }

                // Store the question and answer
                knowledge[question] = answer;
                localStorage.setItem('knowledge', JSON.stringify(knowledge));
                return ` Got it! I've learned: "${parts[0]}" - "${answer}"`;
            } else {
                return ``;
            }
        }

        function editKnowledge(editing) {
            const parts = editing.split('-').map(part => part.trim());
            if (parts.length === 2) {
                const question = normalizeString(parts[0]); // Normalize question
                const newAnswer = parts[1];
                let knowledge = JSON.parse(localStorage.getItem('knowledge')) || {};

                // Check if the question exists
                if (knowledge[question]) {
                    knowledge[question] = newAnswer;
                    localStorage.setItem('knowledge', JSON.stringify(knowledge));
                    return `Updated! "${parts[0]}" is now answered with: "${newAnswer}"`;
                } else {
                    return ` I don't know that question to edit.`;
                }
            } else {
                return ``;
            }
        }

        function removeKnowledge(removal) {
            const question = normalizeString(removal.trim()); // Normalize question
            let knowledge = JSON.parse(localStorage.getItem('knowledge')) || {};

            // Check if the question exists
            if (knowledge[question]) {
                delete knowledge[question];
                localStorage.setItem('knowledge', JSON.stringify(knowledge));
                return `Removed the knowledge of "${removal}".`;
            } else {
                return `I don't know that question to remove.`;
            }
        }

        function getKnowledge(userText) {
            const knowledge = JSON.parse(localStorage.getItem('knowledge')) || {};
            const normalizedUserText = normalizeString(userText); // Normalize user input
            return knowledge[normalizedUserText] || null; // Retrieve knowledge
        }

        function checkSimilarity(userText) {
            const knowledge = JSON.parse(localStorage.getItem('knowledge')) || {};
            const normalizedUserText = normalizeString(userText); // Normalize user input

            for (const question in knowledge) {
                const normalizedQuestion = normalizeString(question); // Normalize stored question
                const similarity = calculateSimilarity(normalizedUserText, normalizedQuestion);
                if (similarity >= 0.5) { // 50% similarity
                    return `${knowledge[question]}`;
                }
            }
            return null; // No similar question found
        }

        function calculateSimilarity(userText, storedQuestion) {
            const userKeywords = extractKeywords(userText);
            const storedKeywords = extractKeywords(storedQuestion);
            const totalKeywords = new Set([...userKeywords, ...storedKeywords]).size;
            const matchingKeywords = userKeywords.filter(keyword => storedKeywords.includes(keyword)).length;

            return matchingKeywords / totalKeywords; // Calculate similarity as the ratio of matching keywords
        }

        function extractKeywords(text) {
            const normalized = text.toLowerCase().replace(/[\W_]+/g, ' ');
            return normalized.split(' ').map(word => removeExtraLetters(word)).filter(Boolean);
        }

        function removeExtraLetters(word) {
            return word.replace(/(.)\1+/g, '$1'); // Remove repeated letters
        }

        function normalizeString(str) {
            return str.toLowerCase().replace(/[\W_]+/g, ''); // Normalize to lowercase and remove non-alphanumeric characters
        }

        function deleteChat() {
            messages.innerHTML = ''; // Clear chat history
            addMessage("All Clear 😁 ", 'bot');
        }
