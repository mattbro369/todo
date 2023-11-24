import 'normalize.css';
import './styles.css';
import './taskcards.css';
import './sidenav.css';
import './content';
import tickLogo from './assets/tick-logo.svg';

// JS
import * as sideNavFunctions from './sidenav';
import * as content from './content';
import * as taskFunctions from './tasks';

// DOM Cache
export const sideNavBar = document.getElementById('sidenav');
export const mainContentWrapper = document.getElementById(
  'main-content-wrapper'
);
export const contentWrapper = document.getElementById('content-wrapper');

const logo = document.getElementById('tickLogo');
logo.src = tickLogo;

// Navigation | Open Sidebar | Home

// Render Home on load
content.renderMain.home();

const navButtons = Array.from(document.getElementsByClassName('navbar-icon'));

navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button === navButtons[0] && sideNavFunctions.isSideNavOpen === false) {
      sideNavFunctions.open();
    } else {
      sideNavFunctions.close();
    }

    if (button === navButtons[1]) {
      content.renderMain.home();
    }
  });
});

// Manage task objects

export const taskArray = [];

console.log(taskArray.length);

if (taskArray.length < 1) {
  taskFunctions.task.renderAddTaskButton(contentWrapper);
}
