
function speakBack() {
    const input = document.getElementById('userInput').value;
    const speechDisplay = document.getElementById('sorynSpeech');
    if (input.trim() === "") return;

    const response = `You said: "${input}". I am here.`;
    speechDisplay.textContent = response;

    const utter = new SpeechSynthesisUtterance(response);
    utter.pitch = 1;
    utter.rate = 1;
    speechSynthesis.speak(utter);
}
