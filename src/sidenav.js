import { mainContentWrapper } from '.';
import { sideNavBar } from '.';
import dropdownIcon from './assets/dropdown-icon.svg';

let projectsClicked = false;

const sideNavItems = Array.from(
  document.getElementsByClassName('sidenav-item')
);

console.log(sideNavItems);

sideNavItems.forEach((item) => {
  item.addEventListener('click', () => {
    if (sideNavItems.indexOf(item) === sideNavItems.length - 1) {
      console.log(projectsClicked);
      projectsClicked === false
        ? (projectsClicked = true)
        : (projectsClicked = false);
      console.log(projectsClicked);
      sideNavFunc.dropdownProjects();
    }
    console.log(item.textContent);
  });
});

let isSideNavOpen = false;

export const sideNavFunc = (function () {
  const open = function () {
    sideNavBar.style.width = '250px';
    sideNavFunc.isSideNavOpen = true;
  };

  const close = function () {
    console.log('closed');
    sideNavBar.style.transition = '0.5s';
    sideNavBar.style.width = '0';
    mainContentWrapper.style.marginLeft = '0';
    sideNavFunc.isSideNavOpen = false; // Set the sidebar state to closed
  };

  const dropdownProjects = function () {
    const icon = document.getElementById('dropdown-icon');

    if (projectsClicked === true) {
      icon.style.transform = 'rotate(0deg)';
    } else {
      icon.style.transform = 'rotate(-90deg)';
    }
    console.log('worked');
  };

  return { open, close, dropdownProjects, isSideNavOpen };
})();
