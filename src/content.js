// DOM Cache
import { mainContent } from '.';
import addIconImg from './assets/add.svg';
import * as taskFunctions from './tasks';

export const renderMain = (function () {
  const headingWrapper = document.getElementById('heading-wrapper');
  const contentWrapper = document.getElementById('content-wrapper');

  const home = function () {
    renderHomeHeading();
  };

  const renderHomeHeading = function () {
    //Heading
    let mainHeading = document.createElement('h1');
    mainHeading.textContent = 'Home';
    mainHeading.id = 'main-heading';
    headingWrapper.appendChild(mainHeading);

    //Date
    let dateHeader = document.createElement('h1');
    dateHeader.id = 'date-header';
    let date = new Date();
    dateHeader.textContent = date.toDateString();
    headingWrapper.appendChild(dateHeader);
  };

  return { home, renderHomeHeading };
})();
