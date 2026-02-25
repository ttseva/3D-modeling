const menu = () => {
  const menu = document.querySelector('menu');
  const menuBtn = document.querySelector('.menu');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  }

  menuBtn.addEventListener('click', handleMenu);

  menu.addEventListener('click', (e) => {
    if (e.target.classList.contains('close-btn')) {
      handleMenu();
    } else if (e.target.matches('a')) {
      handleMenu();
    }
  })
}

export default menu;