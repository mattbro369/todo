import { mainContent } from '.';
import { sideNavBar } from '.';

export const sideNavFunc = (function () {
  let isSideNavOpen = false;

  const open = function () {
    if (!isSideNavOpen) {
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
            console.log('click');
            sideNavFunc.close();
          });
          element.textContent = sidebarSectionName[0];
        } else {
          element.setAttribute('href', '#');
          element.textContent = sidebarSectionName[i];
        }

        sideNavBar.appendChild(element);
      }
    }
    isSideNavOpen = true;
  };

  const close = function () {
    if (isSideNavOpen) {
      // Check if the sidebar is open
      sideNavBar.style.width = '0';
      mainContent.style.marginLeft = '0';
      sideNavBar.innerHTML = ''; // Clear the sidebar content
      isSideNavOpen = false; // Set the sidebar state to closed
    }
  };

  return { open, close, isSideNavOpen };
})();

// export function openSideNav() {
//   let isSideNavOpen = true;

//   sideNavBar.style.width = '250px';
//   mainContent.style.marginLeft = '250px';

//   const sidebarSectionName = [
//     '\u2715',
//     'About',
//     'Services',
//     'Client',
//     'Contact',
//   ];

//   for (let i = 0; i < 5; i++) {
//     const element = document.createElement('a');
//     if (i === 0) {
//       element.setAttribute('href', 'javascript:void(0)');
//       element.classList.add('closebutton');
//       element.textContent = sidebarSectionName[0];
//     } else {
//       element.setAttribute('href', '#');
//       element.textContent = sidebarSectionName[i];
//     }

//     sideNavBar.appendChild(element);
//   }
// }
