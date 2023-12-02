import { renderMain } from './content';
import addIconImg from './assets/add.svg';
import slothImgSrc from './assets/sloth.png';
import { contentWrapper, taskArray } from '.';

export const task = (function () {
  // Add Task Button
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
      renderAddTaskPrompt(contentWrapper);
    });
  };

  const renderAddTaskPrompt = function (target) {
    let addTaskWrapper = document.createElement('div');
    addTaskWrapper.classList.add('add-task-wrapper');
    target.appendChild(addTaskWrapper);
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

  return { renderAddTaskPrompt, renderAddTaskButton, renderNoTaskPage };
})();
