const menu = () => {
  const menu = document.querySelector('menu');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  }

  const toggleMenu = () => {
    document.addEventListener('click', (e) => {
      if (e.target.closest('.menu') || e.target.matches('menu a') ||
        (menu.classList.contains('active-menu') && !e.target.closest('menu'))) {
        handleMenu();
      }
    });
  }

  toggleMenu();
}

export default menu;