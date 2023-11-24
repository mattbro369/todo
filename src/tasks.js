export const task = (function () {
  const renderAddTaskPrompt = function (target) {
    let addTaskWrapper = document.createElement('div');
    addTaskWrapper.classList.add('add-task-wrapper');
    target.appendChild(addTaskWrapper);
  };

  return { renderAddTaskPrompt };
})();
