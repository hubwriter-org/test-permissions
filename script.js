/* Example for testing */

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const greetingDiv = document.getElementById('greeting');
    
    // Vulnerable to XSS
    greetingDiv.innerHTML = `Hello, ${username}!`;
});
