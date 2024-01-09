export const taskArray = [];

export function Task(valueArr) {
  this.title = valueArr[0];
  this.description = valueArr[1];
  this.date = valueArr[2];
  this.priority = valueArr[3];

  this.render = function (target) {
    let task = document.createElement('div');
    task.classList.add('task-wrapper');

    let taskTitle = document.createElement('p');
    taskTitle.classList.add('task-title');
    taskTitle.textContent = this.title;
    task.appendChild(taskTitle);

    let taskDescription = document.createElement('p');
    taskDescription.classList.add('task-description');
    taskDescription.textContent = this.description;
    task.appendChild(taskDescription);

    let taskDate = document.createElement('p');
    taskDate.classList.add('task-date');
    taskDate.textContent = this.date;
    task.appendChild(taskDate);

    let taskPriority = document.createElement('img');
    taskPriority.classList.add('task-priority');
    taskPriority.src = `./${this.priority}-flag.png`;
    task.appendChild(taskPriority);

    target.appendChild(task);
  };
}
