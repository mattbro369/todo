import 'normalize.css';
import './styles.css';
import './taskcards.css';
import './sidenav.css';
import './content';
import tickLogo from './assets/tick-logo.svg';

// JS
import { sideNavFunc } from './sidenav';
import { renderMain } from './content';
import { task } from './tasks';

// DOM Cache
export const sideNavBar = document.getElementById('sidenav');
export const mainContent = document.getElementById('main-content-wrapper');

const logo = document.getElementById('tickLogo');
logo.src = tickLogo;

// Navigation | Open Sidebar | Home

// Render Home on load
renderMain.home();

const navButtons = Array.from(document.getElementsByClassName('navbar-icon'));

navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button === navButtons[0] && sideNavFunc.isSideNavOpen === false) {
      sideNavFunc.open();
    } else {
      sideNavFunc.close();
    }

    if (button === navButtons[1]) {
      task.renderAddTaskPrompt(mainContent);
    }
  });
});
