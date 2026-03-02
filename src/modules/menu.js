const menu = () => {
  const menu = document.querySelector('menu');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  }

  const toggleMenu = () => {
    document.addEventListener('click', (e) => {
      console.log();
      if (e.target.closest('.menu') || e.target.matches('menu a') ||
        (menu.classList.contains('active-menu') && !e.target.closest('menu'))) {
        handleMenu();
      }

      if (e.target.matches('menu a') || e.target.closest('main a')) {
        e.preventDefault();

        const linkMenu = e.target.getAttribute('href') ??
          e.target.closest('main a').getAttribute('href')
        const linkBlock = document.querySelector(linkMenu);

        linkBlock.scrollIntoView({behavior: "smooth"});
      }
    });
  }

  toggleMenu();
}

export default menu;