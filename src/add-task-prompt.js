import { Image } from '.';

export const addTaskPrompt = (function () {
  const renderPriorityDropdown = function () {
    const dropdownBtnIcon = new Image(
      'dropdown-btn-icon',
      './dropdown-icon.svg'
    );
    dropdownBtnIcon.render();
  };

  const open = function () {
    // function to open add-task
    // Simply use display: block or something similar - DO NOT RE-Render
  };

  const close = function () {
    // function to close add-task
    // Clear the form inputs -> display:none to avoid re-rendering
  };

  return { renderPriorityDropdown };
})();
