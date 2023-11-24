import { renderMain } from './content';
import addIconImg from './assets/add.svg';
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

  return { renderAddTaskPrompt, renderAddTaskButton };
})();
