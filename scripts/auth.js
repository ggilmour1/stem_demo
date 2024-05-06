// scripts/auth.js

// Function to log out the user
function logout() {
    // Clear the token from localStorage or sessionStorage
    localStorage.removeItem('authToken'); // If using localStorage
    sessionStorage.removeItem('authToken'); // If using sessionStorage
    
    // Redirect to sign-in page
    window.location.href = 'signin.html';
}

// Function to get the token from localStorage or sessionStorage
function getToken() {
    return localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));

}
