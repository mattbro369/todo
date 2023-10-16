import 'normalize.css';
import './styles.css';
import tickLogo from './assets/tick-logo.svg';

import { sideNavFunc } from './sidenav';

// DOM Cache
export const sideNavBar = document.getElementById('sidenav');
export const mainContent = document.getElementById('main-content-wrapper');

const logo = document.getElementById('tickLogo');
logo.src = tickLogo;

// Navigation | Open Sidebar | Home

const navButtons = Array.from(document.getElementsByClassName('navbar-icon'));

navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button === navButtons[0] ? sideNavFunc.open() : console.log('Home'); // Change this to open / close menu + home page
  });
});
