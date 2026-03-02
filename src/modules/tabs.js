const tabs = () => {
  const tabPanel = document.querySelector('.service-header');
  const tabs = document.querySelectorAll('.service-header-tab');
  const tabContent = document.querySelectorAll('.service-tab');

  tabs[0].classList.add('active');
  tabContent[0].classList.remove('d-none');

  tabPanel.addEventListener('click', (e) => {
    const tabBtn = e.target.closest('.service-header-tab');

    if (tabBtn) {
      tabs.forEach((tab, index) => {
        if (tab === tabBtn) {
          tab.classList.add('active');
          tabContent[index].classList.remove('d-none');
        } else {
          tab.classList.remove('active');
          tabContent[index].classList.add('d-none');
        }
      })
    }
  })
}

export default tabs;