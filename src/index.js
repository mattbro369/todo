import 'normalize.css';
import './styles.css';
import './sidenav.css';
import './content';
import './add-task-prompt.css';

// JS
import { sidenav } from './sidenav';
import { content } from './content';
import { tasks } from './tasks';
import { addTaskPrompt } from './add-task-prompt';

// DOM Cache
export const mainContentWrapper = document.getElementById(
  'main-content-wrapper'
);
export const contentWrapper = document.getElementById('content-wrapper');
export const headingWrapper = document.getElementById('heading-wrapper');

// Navigation | Open Sidebar | Home

// Render Home on load
export let currentPage;
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
      content.clear(contentWrapper);
      content.home();
    }
  });
});

export const taskArray = [];

console.log(taskArray.length);

if (taskArray.length < 1) {
  // addTaskPrompt.render(contentWrapper);
  content.renderNoTaskPage(contentWrapper);
}
