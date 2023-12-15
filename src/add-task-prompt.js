import { Image } from '.';

export const addTaskPrompt = (function () {
  const renderPriorityDropdown = function () {
    new Image('dropdown-btn-icon', './dropdown-icon.svg').render();

    renderPriorityFlags();
  };

  const renderPriorityFlags = function () {
    let flagArr = [
      new Image('priority-placeholder-flag', './red-flag.png'),
      new Image('priority-flag-red', './red-flag.png'),
      new Image('priority-flag-orange', './orange-flag.png'),
      new Image('priority-flag-yellow', './yellow-flag.png'),
      new Image('priority-flag-green', './green-flag.png'),
    ];

    flagArr.forEach((flag) => {
      flag.render();
    });
  };

  const open = function () {
    // function to open add-task
    // Simply use display: block or something similar - DO NOT RE-Render
  };

  const close = function () {
    // function to close add-task
    // Clear the form inputs -> display:none to avoid re-rendering
  };

  return { renderPriorityDropdown, renderPriorityFlags };
})();
