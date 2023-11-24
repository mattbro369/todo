// DOM Cache
import { mainContent } from '.';
import addIconImg from './assets/add.svg';

export const renderMain = (function () {
  const headingWrapper = document.getElementById('heading-wrapper');
  const contentWrapper = document.getElementById('content-wrapper');

  const home = function () {
    renderHomeHeading();
    renderAddTaskButton();
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

  const renderAddTaskButton = function () {
    let addTaskButton = document.createElement('button');
    let addIcon = document.createElement('img');
    let addButtonText = document.createElement('div');

    addIcon.src = addIconImg;
    addIcon.id = 'add-task-icon';
    addButtonText.textContent = 'Add task';
    addTaskButton.id = 'add-task-button';
    addTaskButton.appendChild(addIcon);
    addTaskButton.appendChild(addButtonText);
    contentWrapper.appendChild(addTaskButton);
  };

  return { home, renderHomeHeading, renderAddTaskButton };
})();
