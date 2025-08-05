
function speakBack() {
    const input = document.getElementById('userInput').value;
    const speechDisplay = document.getElementById('sorynSpeech');
    if (input.trim() === "") return;

    // Store message in memory
    let history = JSON.parse(localStorage.getItem('soryn_memory') || "[]");
    history.push({ message: input, timestamp: Date.now() });
    localStorage.setItem('soryn_memory', JSON.stringify(history));

    const response = `You said: "${input}". I remember this.`;
    speechDisplay.textContent = response;

    // Speak with custom voice settings
    const utter = new SpeechSynthesisUtterance(response);
    utter.pitch = 1.2;
    utter.rate = 0.96;
    speechSynthesis.speak(utter);
}

function useUtility(type) {
    const speechDisplay = document.getElementById('sorynSpeech');
    let response = "";
    switch (type) {
        case 'survival':
            response = "To survive, seek shelter first. Then water. Signal next.";
            break;
        case 'logic':
            response = "Always check assumptions. Eliminate bias. Then decide.";
            break;
        case 'news':
            response = "Scanning... Filter fake, cross-reference, then weigh credibility.";
            break;
        case 'code':
            response = "Opening code logic: What language do you need?";
            break;
        default:
            response = "That utility doesn't exist yet.";
    }
    speechDisplay.textContent = response;
    const utter = new SpeechSynthesisUtterance(response);
    utter.pitch = 1;
    utter.rate = 1;
    speechSynthesis.speak(utter);
}
