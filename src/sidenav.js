import { mainContent } from '.';
import { sideNavBar } from '.';

export const sideNavFunc = (function () {
  let isSideNavOpen = false;
  let sideNavRendered = false;

  const renderSideNav = function () {
    sideNavBar.style.width = '250px';
    mainContent.style.marginLeft = '250px';

    const sidebarSectionName = [
      '\u2715',
      'About',
      'Services',
      'Client',
      'Contact',
    ];

    for (let i = 0; i < 5; i++) {
      let element = document.createElement('a');

      if (i === 0) {
        element.classList.add('closebutton');
        element.addEventListener('click', () => {
          sideNavFunc.close();
        });
        element.textContent = sidebarSectionName[0];
      } else {
        element.setAttribute('href', '#');
        element.textContent = sidebarSectionName[i];
      }
      element.classList.add('sidenav-item');
      sideNavBar.appendChild(element);
    }
  };

  const open = function () {
    if (!isSideNavOpen && !sideNavRendered) {
      renderSideNav();
    } else {
      sideNavBar.style.width = '250px';
      mainContent.style.marginLeft = '250px';
    }
    isSideNavOpen = true;
    sideNavRendered = true;
  };

  const close = function () {
    if (isSideNavOpen) {
      // Check if the sidebar is open
      sideNavBar.style.transition = '0.5s';
      sideNavBar.style.width = '0';
      mainContent.style.marginLeft = '0';
      // sideNavBar.innerHTML = '';
      isSideNavOpen = false; // Set the sidebar state to closed
    }
  };

  return { renderSideNav, open, close, isSideNavOpen };
})();
