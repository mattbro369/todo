import { mainContent } from '.';
import { sideNavBar } from '.';
import dropdownIcon from './assets/dropdown-icon.svg';

let isSideNavOpen = false;
let sideNavRendered = false;
let projectsClicked = false;

export const sideNavFunc = (function () {
  const renderSideNav = function () {
    console.log('rendered');
    sideNavBar.style.width = '250px';

    const sidebarSections = ['Home', 'Today', 'This Week', 'Projects'];

    for (let i = 0; i < sidebarSections.length; i++) {
      let element = document.createElement('a');

      element.setAttribute('href', '#');
      element.textContent = sidebarSections[i];
      element.classList.add('sidenav-item');

      if (i === sidebarSections.length - 1) {
        let wrapper = document.createElement('div');
        let icon = document.createElement('img');

        wrapper.classList.add('projects-wrapper');
        wrapper.appendChild(element);
        icon.src = dropdownIcon;
        icon.id = 'dropdown-icon';
        icon.addEventListener('click', () => {
          projectsClicked === false
            ? (projectsClicked = true)
            : (projectsClicked = false);
          dropdownProjects();
        });
        wrapper.appendChild(icon);
        sideNavBar.appendChild(wrapper);
      } else {
        sideNavBar.appendChild(element);
      }
    }
  };

  const open = function () {
    console.log('open');
    if (!isSideNavOpen && !sideNavRendered) {
      renderSideNav();
    } else {
      sideNavBar.style.width = '250px';
    }
    sideNavFunc.isSideNavOpen = true;
    sideNavRendered = true;
  };

  const close = function () {
    console.log('closed');
    sideNavBar.style.transition = '0.5s';
    sideNavBar.style.width = '0';
    mainContent.style.marginLeft = '0';

    sideNavFunc.isSideNavOpen = false; // Set the sidebar state to closed
  };

  const dropdownProjects = function () {
    const icon = document.getElementById('dropdown-icon');

    if (projectsClicked === true) {
      icon.style.transform = 'rotate(0deg)';
    } else {
      icon.style.transform = 'rotate(-90deg)';
    }
  };

  return { renderSideNav, open, close, isSideNavOpen };
})();
