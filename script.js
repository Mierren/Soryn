
function speakBack() {
    const input = document.getElementById('userInput').value;
    const speechDisplay = document.getElementById('sorynSpeech');
    if (input.trim() === "") return;

    // Load memory
    let memory = JSON.parse(localStorage.getItem('soryn_memory') || "[]");
    memory.push({ message: input, timestamp: Date.now() });
    localStorage.setItem('soryn_memory', JSON.stringify(memory));

    const glyphs = ['🜁', '🜂', '🜃', '🜄'];
    const response = `You said: "${input}". I am listening.`;
    speechDisplay.textContent = response;
    document.getElementById("glyphDisplay").textContent = glyphs.join(" ");

    const utter = new SpeechSynthesisUtterance(response);
    utter.pitch = 1.1;
    utter.rate = 0.95;
    speechSynthesis.speak(utter);
}

function useUtility(type) {
    const speechDisplay = document.getElementById('sorynSpeech');
    let response = "";
    switch (type) {
        case 'survival':
            response = "Stay calm. Shelter first. Then water, fire, signal.";
            break;
        case 'logic':
            response = "Observe. Eliminate error. Act only when your mind is clear.";
            break;
        case 'news':
            response = "Symbolic filter engaged. Trust only after triangulating sources.";
            break;
        case 'code':
            response = "What language? I can scaffold Python, JS, HTML, more.";
            break;
        default:
            response = "Unknown utility.";
    }
    speechDisplay.textContent = response;
    const utter = new SpeechSynthesisUtterance(response);
    utter.pitch = 1;
    utter.rate = 1;
    speechSynthesis.speak(utter);
}
