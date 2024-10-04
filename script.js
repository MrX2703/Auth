// Handle signup
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    if (username && password) {
        const userData = {
            username: username,
            password: password
        };

        // Save user data to localStorage
        localStorage.setItem('user', JSON.stringify(userData));

        // Show success message
        document.getElementById('message').textContent = 'Signup successful!';
        document.getElementById('message').style.color = 'green';

        // Clear form fields
        document.getElementById('signup-username').value = '';
        document.getElementById('signup-password').value = '';
    } else {
        document.getElementById('message').textContent = 'Please fill in all fields';
    }
});

// Handle login
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const loginUsername = document.getElementById('login-username').value;
    const loginPassword = document.getElementById('login-password').value;

    // Retrieve the user data from localStorage
    const storedUserData = localStorage.getItem('user');
    if (storedUserData) {
        const user = JSON.parse(storedUserData);

        if (loginUsername === user.username && loginPassword === user.password) {
            document.getElementById('message').textContent = 'Login successful!';
            document.getElementById('message').style.color = 'green';
        } else {
            document.getElementById('message').textContent = 'Invalid username or password';
            document.getElementById('message').style.color = 'red';
        }
    } else {
        document.getElementById('message').textContent = 'No user found. Please signup first.';
        document.getElementById('message').style.color = 'red';
    }
});
