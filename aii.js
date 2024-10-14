const messages = document.getElementById('messages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const deleteBtn = document.getElementById('deleteBtn');

// Profile pictures
const userPic = 'add.avif'; // User image URL
const botPic = 'gpp.webp'; // Bot image URL


sendBtn.addEventListener('click', sendMessage);
deleteBtn.addEventListener('click', deleteChat);

// Load chat history from localStorage
loadChatHistory();

function sendMessage() {
    const userText = userInput.value.trim();
    if (userText) {
        addMessage(userText, 'user');
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

    // Save chat history to localStorage
    saveChatHistory();

    // Scroll to the bottom
    messages.scrollTop = messages.scrollHeight;
}

function getBotResponse(userText) {
    const normalizedUserText = normalizeString(userText);
    let botResponse = '';

    // Check for direct knowledge base response
    if (knowledge[normalizedUserText]) {
        botResponse = knowledge[normalizedUserText];
    } else {
        // Check for keywords in user input with fuzzy matching
        const keywords = Object.keys(knowledge);
        for (const keyword of keywords) {
            if (isSimilar(normalizedUserText, keyword)) {
                botResponse = knowledge[keyword];
                break;
            }
        }
    }

    // If still no response, check for synonyms
    if (!botResponse) {
        for (const [key, value] of Object.entries(synonyms)) {
            if (value.some(syn => normalizedUserText.includes(normalizeString(syn)))) {
                botResponse = knowledge[key];
                break;
            }
        }
    }

    // If still no response, check for similarity
    if (!botResponse) {
        botResponse = checkSimilarity(userText)|| "Out of my Database! My database is still upgrading by Ethun 😃!";
    }

    addMessage(botResponse, 'bot');
}

// Function to check for similarity with fuzzy matching
function isSimilar(input, keyword) {
    const threshold = 0.7; // Adjust this threshold as needed
    const distance = levenshteinDistance(input, keyword);
    const maxLen = Math.max(input.length, keyword.length);
    const similarity = 1 - (distance / maxLen);
    return similarity >= threshold;
}

// Levenshtein distance algorithm to calculate similarity
function levenshteinDistance(s, t) {
    const d = [];

    for (let i = 0; i <= s.length; i++) {
        d[i] = [i];
    }

    for (let j = 0; j <= t.length; j++) {
        d[0][j] = j;
    }

    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= t.length; j++) {
            const cost = s[i - 1] === t[j - 1] ? 0 : 1;
            d[i][j] = Math.min(
                d[i - 1][j] + 1, // Deletion
                d[i][j - 1] + 1, // Insertion
                d[i - 1][j - 1] + cost // Substitution
            );
        }
    }

    return d[s.length][t.length];
}

function checkSimilarity(userText) {
    const doc = nlp(userText); // Use compromise to analyze the text

    for (const question in knowledge) {
        const normalizedQuestion = normalizeString(question);
        const questionDoc = nlp(normalizedQuestion);
        const similarity = calculateSimilarity(doc, questionDoc);

        if (similarity >= 0.3) { // Lowered similarity threshold to 30%
            return knowledge[question];
        }
    }
    return null; // No similar question found
}

function calculateSimilarity(doc1, doc2) {
    const words1 = doc1.terms().map(term => term.text);
    const words2 = doc2.terms().map(term => term.text);
    const totalKeywords = new Set([...words1, ...words2]).size;
    const matchingKeywords = words1.filter(word => words2.includes(word)).length;

    return matchingKeywords / totalKeywords; // Calculate similarity as the ratio of matching keywords
}

// Enhanced normalizeString function
function normalizeString(str) {
    // Normalize to lowercase, trim spaces, and remove non-alphanumeric characters
    return str.toLowerCase().replace(/[\W_]+/g, '').replace(/(\w)\1+/g, '$1'); // Also reduces repeated characters
}

function deleteChat() {
    messages.innerHTML = ''; // Clear chat history
    localStorage.removeItem('chatHistory'); // Clear chat history from localStorage
    addMessage("All chat cleared! 😁", 'bot');
}

function saveChatHistory() {
    const chatHistory = messages.innerHTML; // Get chat history HTML
    localStorage.setItem('chatHistory', chatHistory); // Save to localStorage
}

function loadChatHistory() {
    const chatHistory = localStorage.getItem('chatHistory'); // Get chat history from localStorage
    if (chatHistory) {
        messages.innerHTML = chatHistory; // Set chat history HTML
        messages.scrollTop = messages.scrollHeight; // Scroll to the bottom
    }
}
