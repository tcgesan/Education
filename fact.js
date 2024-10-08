
    
        const facts = [
            "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
            "Octopuses have three hearts and blue blood.",
            "Bananas are berries, but strawberries are not.",
            "A group of flamingos is called a 'flamboyance.'",
            "The Eiffel Tower can be 15 cm taller during the summer due to the expansion of metal.",
            "Humans share about 60% of their DNA with bananas.",
            "Sharks existed before trees. Sharks are around 400 million years old, while trees appeared around 350 million years ago.",
            "A day on Venus is longer than a year on Venus.",
            "Wombat poop is cube-shaped to prevent it from rolling away.",
            "Sloths can take up to a month to digest a single meal."
            // "মৌমাছি কখনোই একবারের জন্য ১০০০ ফুলে পরাগায়ন করতে পারে",
        ];

        function generateFact() {
            const randomIndex = Math.floor(Math.random() * facts.length);
            document.getElementById('fact').innerText = facts[randomIndex];
        }