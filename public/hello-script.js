document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    const name = document.getElementById('nameInput').value;
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = `Hello ${name}`;
});
