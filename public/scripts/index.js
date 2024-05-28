const menu = document.getElementById('menu-open');
const close = document.getElementById('menu-closed');
const nav = document.getElementById('navItems');
const title = document.getElementById('title');

menu.addEventListener('click', () => {
     close.style.display = 'block';
     menu.style.display = 'none';
     nav.style.display = 'block';

})

close.addEventListener('click', () => {
     menu.style.display = 'block';
     close.style.display = 'none';
     nav.style.display = 'none';

})