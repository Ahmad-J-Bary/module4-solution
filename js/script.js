document.addEventListener('DOMContentLoaded', function() {
    const runButton = document.getElementById('runButton');
    const consoleOutput = document.getElementById('consoleOutput');
    
    runButton.addEventListener('click', function() {
        // Clear previous output
        consoleOutput.innerHTML = '';
        
        // Wrap code in an IIFE
        (function() {
            // Array of names
            var names = ["John", "Jane", "Jim", "Alex", "Jasmine", "Mike", "Jessica"];
            
            // Loop through each name
            for (var i = 0; i < names.length; i++) {
                // Get first letter of the name
                var firstLetter = names[i].charAt(0).toLowerCase();
                
                // Create output element
                const outputLine = document.createElement('div');
                
                // Check if name starts with 'j'
                if (firstLetter === 'j') {
                    console.log("Goodbye " + names[i]);
                    outputLine.textContent = "Goodbye " + names[i];
                    outputLine.className = "console-line goodbye";
                } else {
                    console.log("Hello " + names[i]);
                    outputLine.textContent = "Hello " + names[i];
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
