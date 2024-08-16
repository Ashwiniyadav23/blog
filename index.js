document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    const correctPassword = 'Mummypapa'; 

    errorMessage.textContent = '';

   
    if (!validEmail.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return; 
    }

    if (password !== correctPassword) {
        errorMessage.textContent = 'Password is incorrect.';
        return; 
    }

    alert('Login successful!');
    window.location.href = 'main.html';
});