const navButton = document.getElementById('mobile-menu-button');

navButton.addEventListener('click', () => {
     const nav = document.getElementById('nav');
     nav.classList.toggle('hidden');
})
