import taskCompletedBtnSrc from './assets/task-completed.png';
import taskDeleteBtnSrc from './assets/close-icon.png';
import { checkTaskArray } from './index.js';

export const taskArray = [];

export function Task(valueArr) {
  this.title = valueArr[0];
  this.description = valueArr[1];
  this.date = valueArr[2];
  this.priority = valueArr[3];

  this.render = function (target) {
    let task = document.createElement('div');
    task.classList.add('task-wrapper');
    let taskSectionLeft = document.createElement('div');
    taskSectionLeft.classList.add('task-section-left');

    let taskPriority = document.createElement('img');
    taskPriority.classList.add('task-priority');
    taskPriority.src = `./${this.priority}-flag.png`;
    taskSectionLeft.appendChild(taskPriority);

    let taskInfoWrapper = document.createElement('div');
    taskInfoWrapper.classList.add('task-info-wrapper');

    let taskTitle = document.createElement('div');
    taskTitle.classList.add('task-title');
    taskTitle.textContent = this.title;
    taskInfoWrapper.appendChild(taskTitle);

    let taskDescription = document.createElement('div');
    taskDescription.classList.add('task-description');
    taskDescription.textContent = this.description;
    taskInfoWrapper.appendChild(taskDescription);

    task.appendChild(taskSectionLeft);
    task.appendChild(taskInfoWrapper);

    let taskDate = document.createElement('div');
    taskDate.classList.add('task-date');
    taskDate.textContent = this.date;
    task.appendChild(taskDate);

    let taskSectionRight = document.createElement('div');
    taskSectionRight.classList.add('task-section-right');

    let taskCompletedBtn = document.createElement('img');
    taskCompletedBtn.classList.add('task-completed-btn');
    let taskDeleteBtn = document.createElement('img');
    taskDeleteBtn.classList.add('task-delete-btn');
    taskCompletedBtn.src = taskCompletedBtnSrc;
    taskDeleteBtn.src = taskDeleteBtnSrc;

    taskSectionRight.appendChild(taskCompletedBtn);
    taskSectionRight.appendChild(taskDeleteBtn);

    taskDeleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.delete(e);
    });

    task.appendChild(taskSectionRight);

    target.appendChild(task);
  };

  this.delete = function (e) {
    taskArray.splice(taskArray.indexOf(this), 1);
    let target = e.target.closest('.task-wrapper');
    target.remove();
    console.log(taskArray);
    checkTaskArray(taskArray);
  };
}
