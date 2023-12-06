import 'normalize.css';
import './styles.css';
import './add-task-prompt.css';
import './sidenav.css';
import './content';

// JS
import { sidenav } from './sidenav';
import { content } from './content';
import { tasks } from './tasks';

// DOM Cache
export const sideNavBar = document.getElementById('sidenav');
export const mainContentWrapper = document.getElementById(
  'main-content-wrapper'
);
export const contentWrapper = document.getElementById('content-wrapper');

// Navigation | Open Sidebar | Home

// Render Home on load
content.home();

const navButtons = Array.from(document.getElementsByClassName('navbar-icon'));

navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button === navButtons[0] && sidenav.isSideNavOpen === false) {
      sidenav.open();
      console.log(sidenav.isSideNavOpen);
    } else {
      sidenav.close();
    }

    if (button === navButtons[1]) {
      content.home();
    }
  });
});

export const taskArray = [];

console.log(taskArray.length);

if (taskArray.length < 1) {
  tasks.renderAddTaskButton(contentWrapper);
  // tasks.renderAddTaskPrompt(contentWrapper);
  content.renderNoTaskPage(contentWrapper);
}
