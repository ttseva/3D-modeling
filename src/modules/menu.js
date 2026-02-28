const menu = () => {
  const menu = document.querySelector('menu');
  const slideBtn = document.querySelector('main > a');


  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  }

  const toggleMenu = () => {
    document.addEventListener('click', (e) => {
      if (e.target.closest('.menu') || e.target.matches('menu a') ||
        (menu.classList.contains('active-menu') && !e.target.closest('menu'))) {
        handleMenu();
      }
      if (e.target.matches('menu a') || e.target.matches('main > a')) {
        e.preventDefault();
      }
    });
  }

  toggleMenu();
}

export default menu;