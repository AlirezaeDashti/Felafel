// Set initial language
let currentLanguage = 'en'; // Default to English

// Function to set language and update all text content
function setLanguage(lang) {
    // Update language buttons state
    document.getElementById('lang-en').disabled = lang === 'en';
    document.getElementById('lang-fa').disabled = lang === 'fa';

    // Update all elements with data-lang attribute
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        el.textContent = translations[lang][key];
    });

    // Update language-specific logic
    currentLanguage = lang;
}

// Language switch event listeners
document.getElementById('lang-en').addEventListener('click', function() {
    setLanguage('en');
});

document.getElementById('lang-fa').addEventListener('click', function() {
    setLanguage('fa');
});

// Translations for both languages
const translations = {
    en: {
        'login-title': 'Login',
        'username-label': 'Username:',
        'password-label': 'Password:',
        'first-name-label': 'First Name:',
        'last-name-label': 'Last Name:',
        'sex-label': 'Sex:',
        'male-option': 'Male',
        'female-option': 'Female',
        'create-username-label': 'Username:',
        'create-password-label': 'Password:',
        'login-button': 'Login',
        'create-account-button': 'Create Account',
        'submit-account-button': 'Submit'
    },
    fa: {
        'login-title': 'ورود',
        'username-label': 'نام کاربری:',
        'password-label': 'گذرواژه:',
        'first-name-label': 'نام:',
        'last-name-label': 'نام خانوادگی:',
        'sex-label': 'جنسیت:',
        'male-option': 'مرد',
        'female-option': 'زن',
        'create-username-label': 'نام کاربری:',
        'create-password-label': 'گذرواژه:',
        'login-button': 'ورود',
        'create-account-button': 'ایجاد حساب',
        'submit-account-button': 'ثبت'
    }
};

// Apply initial language translations
applyTranslations(currentLanguage);

function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        el.textContent = translations[lang][key];
    });
}

// Login button event listener
document.getElementById('login-button').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Add your login logic here
    alert(`Login with username: ${username} and password: ${password}`);
    // Store username in localStorage
    localStorage.setItem('username', username);
    // Redirect to dashboard
    window.location.href = 'dashboard/dashboard.html';
});

// Toggle create account button event listener
document.getElementById('toggle-create-account-button').addEventListener('click', function() {
    document.getElementById('form-title').textContent = translations[currentLanguage]['create-account-button'];
    document.getElementById('create-account-fields').classList.toggle('hidden');
    document.getElementById('login-fields').classList.toggle('hidden');
    document.getElementById('login-button').classList.toggle('hidden');
    document.getElementById('toggle-create-account-button').classList.toggle('hidden');
    document.getElementById('submit-create-account-button').classList.toggle('hidden');
});

// Submit create account button event listener
document.getElementById('submit-create-account-button').addEventListener('click', function() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const sex = document.getElementById('sex').value;
    const username = document.getElementById('create-username').value;
    const password = document.getElementById('create-password').value;
    // Add your account creation logic here
    alert(`Create account with first name: ${firstName}, last name: ${lastName}, sex: ${sex}, username: ${username} and password: ${password}`);
    // Store user details in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('sex', sex);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    // Redirect to dashboard
    window.location.href = 'dashboard/dashboard.html';
});
