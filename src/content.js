import { currentPage, contentWrapper, headingWrapper } from './index.js';
import { addTaskPrompt } from './add-task-prompt.js';

import addIconImg from './assets/add.svg';
import slothImgSrc from './assets/sloth.png';

export const content = (function () {
  const home = function () {
    renderHomeHeading();
    renderAddTaskButton(contentWrapper);
    currentPage = 'home';
  };

  const renderHomeHeading = function () {
    if (currentPage === 'home') return;

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

  const renderAddTaskButton = function (target) {
    let addTaskButton = document.createElement('button');
    let addIcon = document.createElement('img');
    let addButtonText = document.createElement('div');

    addIcon.src = addIconImg;
    addIcon.id = 'add-task-icon';
    addButtonText.textContent = 'Add task';
    addTaskButton.id = 'add-task-button';
    addTaskButton.appendChild(addIcon);
    addTaskButton.appendChild(addButtonText);
    target.appendChild(addTaskButton);

    addTaskButton.addEventListener('click', () => {
      removeAddTaskButton();
      removeNoTaskPage();
      addTaskPrompt.render(contentWrapper);
    });
  };

  const removeAddTaskButton = function () {
    const target = document.getElementById('add-task-button');
    target.remove();
  };

  const renderNoTaskPage = function (target) {
    let noTaskWrapper = document.createElement('div');
    let imgWrapper = document.createElement('div');
    let slothImg = document.createElement('img');
    let noTaskText = document.createElement('p');

    // Wrapper
    noTaskWrapper.id = 'no-task-wrapper';
    imgWrapper.id = 'sloth-image-wrapper';

    // Image
    slothImg.id = 'sloth-image';
    slothImg.src = slothImgSrc;
    imgWrapper.appendChild(slothImg);
    noTaskWrapper.appendChild(imgWrapper);

    // Text
    noTaskText.id = 'no-task-text';
    noTaskText.textContent = "Hooray! You've got nothing to do!";
    noTaskWrapper.appendChild(noTaskText);

    target.appendChild(noTaskWrapper);
    console.log('Finished');
  };

  const removeNoTaskPage = function () {
    let noTask = document.getElementById('no-task-wrapper');
    if (noTask === undefined) return;
    noTask.remove();
  };

  const clear = function (target) {
    while (target.firstChild) {
      target.removeChild(target.firstChild);
    }
  };

  return {
    home,
    renderHomeHeading,
    renderAddTaskButton,
    removeAddTaskButton,
    renderNoTaskPage,
    clear,
  };
})();
