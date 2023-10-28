import { mainContent } from '.';
import { sideNavBar } from '.';

let isSideNavOpen = false;
let sideNavRendered = false;

export const sideNavFunc = (function () {
  const renderSideNav = function () {
    sideNavBar.style.width = '250px';
    mainContent.style.marginLeft = '250px';

    const sidebarSections = ['Home', 'Today', 'This Week', 'Projects'];

    for (let i = 0; i < sidebarSections.length; i++) {
      let element = document.createElement('a');

      element.setAttribute('href', '#');
      element.textContent = sidebarSections[i];
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
    sideNavFunc.isSideNavOpen = true;
    sideNavRendered = true;
  };

  const close = function () {
    sideNavBar.style.transition = '0.5s';
    sideNavBar.style.width = '0';
    mainContent.style.marginLeft = '0';

    sideNavFunc.isSideNavOpen = false; // Set the sidebar state to closed
  };

  return { renderSideNav, open, close, isSideNavOpen };
})();
