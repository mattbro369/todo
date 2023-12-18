import { mainContentWrapper } from '.';

export const sideNavBar = document.getElementById('sidenav');
export const sideNavItems = Array.from(
  document.getElementsByClassName('sidenav-item')
);

let projectsClicked = false;

sideNavItems.forEach((item) => {
  item.addEventListener('click', () => {
    if (sideNavItems.indexOf(item) === sideNavItems.length - 1) {
      console.log(projectsClicked);
      projectsClicked === false
        ? (projectsClicked = true)
        : (projectsClicked = false);
      console.log(projectsClicked);
      sidenav.dropdownProjects();
    }
    console.log(item.textContent);
  });
});

let isSideNavOpen = false;

export const sidenav = (function () {
  const open = function () {
    sideNavBar.style.width = '250px';
    sidenav.isSideNavOpen = true;
  };

  const close = function () {
    console.log('closed');
    sideNavBar.style.transition = '0.5s';
    sideNavBar.style.width = '0';
    mainContentWrapper.style.marginLeft = '0';
    sidenav.isSideNavOpen = false;
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
