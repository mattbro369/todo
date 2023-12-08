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

// Importing images from assets
export const imageCache = {};

function importAll(r) {
  r.keys().forEach((key) => (imageCache[key] = r(key)));
}

importAll(require.context('./assets/', false, /\.(png|svg|jpg|jpeg|gif)$/i));

const menuIcon = document.getElementById('menu-icon');
menuIcon.src = imageCache['./menu-icon.png'];
const homeIcon = document.getElementById('home-icon');
homeIcon.src = imageCache['./home-icon.png'];
const tickLogo = document.getElementById('tick-logo');
tickLogo.src = imageCache['tick-logo.svg'];
const dropdownIcon = document.getElementById('dropdown-icon');
dropdownIcon.src = imageCache['./dropdown-icon.svg'];

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
