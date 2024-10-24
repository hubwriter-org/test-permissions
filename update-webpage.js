/* Test Copilot Autofix 4 */

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const user = document.getElementById('user').value;
    const greetingDiv = document.getElementById('greeting');

    // Vulnerable to XSS
    greetingDiv.innerHTML = `Hello, ${user}!`;
});
