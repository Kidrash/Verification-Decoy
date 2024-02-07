// public/main.js

// Common functions (you can extend these as needed)
function redirectTo(path) {
    window.location.href = path;
}

function handleResponse(response) {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Request failed');
    }
}

// Index Page
if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
    // Add any specific logic for the index page here
}

// Registration Page
if (window.location.pathname === '/register.html') {
    document.getElementById('registerForm').addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        try {
            const response = await fetch('/register', {
                method: 'POST',
                body: formData,
            });
            handleResponse(response);
            redirectTo('/login.html');  // Redirect to login page after successful registration
        } catch (error) {
            console.error('Registration failed');
        }
    });
}

// Login Page
if (window.location.pathname === '/login.html') {
    document.getElementById('loginForm').addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        try {
            const response = await fetch('/login', {
                method: 'POST',
                body: formData,
            });
            handleResponse(response);
            redirectTo('/dashboard.html');  // Redirect to dashboard page after successful login
        } catch (error) {
            console.error('Login failed');
        }
    });
}

// Dashboard Page
if (window.location.pathname === '/dashboard.html') {
    // Add any specific logic for the dashboard page here
}
