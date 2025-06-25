// Simulated external libraries
(function(window) {
    var helloSpeaker = {};
    var speakWord = "Hello";
    
    helloSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
        return speakWord + " " + name;
    };
    
    window.helloSpeaker = helloSpeaker;
})(window);

(function(window) {
    var byeSpeaker = {};
    var speakWord = "Good Bye";
    
    byeSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
        return speakWord + " " + name;
    };
    
    window.byeSpeaker = byeSpeaker;
})(window);

// Main application
document.addEventListener('DOMContentLoaded', function() {
    const runButton = document.getElementById('runButton');
    const consoleOutput = document.getElementById('consoleOutput');
    
    runButton.addEventListener('click', function() {
        // Clear previous output
        consoleOutput.innerHTML = '';
        
        // Wrap code in an IIFE
        (function() {
            // Array of names
            var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
            
            // Loop through each name
            for (var i = 0; i < names.length; i++) {
                // Get first letter of the name
                var firstLetter = names[i].charAt(0).toLowerCase();
                
                // Create output element
                const outputLine = document.createElement('div');
                let message;
                
                // Check if name starts with 'j'
                if (firstLetter === 'j') {
                    message = byeSpeaker.speak(names[i]);
                    outputLine.textContent = message;
                    outputLine.className = "console-line goodbye";
                } else {
                    message = helloSpeaker.speak(names[i]);
                    outputLine.textContent = message;
                    outputLine.className = "console-line hello";
                }
                
                // Add to console output
                consoleOutput.appendChild(outputLine);
            }
        })();
        
        // Scroll to bottom of console
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
    });
});
