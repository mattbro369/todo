// DOM Cache
import { mainContent } from '.';

export const renderMain = (function () {
  const home = function () {
    const headingWrapper = document.createElement('div');
    headingWrapper.id = 'heading-wrapper';
    mainContent.appendChild(headingWrapper);

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

  return { home };
})();
