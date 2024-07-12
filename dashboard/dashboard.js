document.getElementById('logout-button').addEventListener('click', function() {
    // Add your logout logic here (e.g., clearing session data)
    alert('You have been logged out.');
    window.location.href = '../index.html';
});

// Fetch user info from localStorage
const username = localStorage.getItem('username');
const sex = localStorage.getItem('sex');
const firstName = localStorage.getItem('firstName');
const lastName = localStorage.getItem('lastName');

if (username) {
    document.getElementById('user-name').textContent = `${firstName} ${lastName}`;
    document.getElementById('user-avatar').src = sex === 'female' ? '../female-avatar.png' : '../male-avatar.png';
} else {
    alert('No user logged in.');
    window.location.href = '../index.html';
}
