const container = document.querySelector('.container');
const loginLink = document.querySelector('.SignInLink');
const registerLink = document.querySelector('.SignUpLink');

registerLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent page refresh
    container.classList.add('active');
});

loginLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent page refresh
    container.classList.remove('active');
});
