// script.js
/* Save this as script.js in the same directory as server.js */
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('wordForm');
    const result = document.getElementById('result');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const word = document.getElementById('wordInput').value.trim();

        if (word === '') {
            result.textContent = "You didn't enter a single word.";
        } else if (/^\S+$/.test(word)) {
            result.textContent = `You entered ${word}`;
        } else {
            result.textContent = "You didn't enter a single word.";
        }
    });
});
