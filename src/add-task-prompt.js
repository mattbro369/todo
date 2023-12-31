import { Image } from '.';

export const addTaskPrompt = (function () {
  const render = function () {
    // render card in full
    priorityDropdown.render();
  };

  const open = function () {};

  const close = function () {
    // function to close add-task
    // Clear the form inputs -> display:none to avoid re-rendering
  };

  const priorityDropdown = (function () {
    const dropdownBtn = document.getElementById('custom-btn');
    const dropdown = document.querySelector('.dropdown');
    const dropdownOpts = Array.from(document.getElementsByClassName('option'));

    let isDropdownOpen = false;

    dropdownBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (!isDropdownOpen) {
        open();
      } else {
        close();
      }
    });

    const render = function () {
      new Image('dropdown-btn-icon', './dropdown-icon.svg').render();
      renderPriorityFlags();
    };

    const renderPriorityFlags = function () {
      let flagArr = [
        new Image('placeholder-flag', './blank-flag.png'),
        new Image('priority-flag-red', './red-flag.png'),
        new Image('priority-flag-orange', './orange-flag.png'),
        new Image('priority-flag-yellow', './yellow-flag.png'),
        new Image('priority-flag-green', './green-flag.png'),
      ];

      const priorityArr = ['red', 'orange', 'yellow', 'green'];

      flagArr.forEach((flag) => {
        flag.render();

        if (flagArr.indexOf(flag) > 0) {
          let target = document.getElementById(flag.targetId);
          target.dataset.priority = priorityArr[flagArr.indexOf(flag) - 1];
        }
      });
    };

    const open = function () {
      dropdownOpts.forEach((option) => {
        option.style.display = 'block';
      });
      dropdown.style.display = 'flex';
      isDropdownOpen = true;
      console.log(isDropdownOpen);

      detectClickOutside();
    };

    const close = function () {
      dropdownOpts.forEach((option) => {
        option.style.display = 'none';
      });
      dropdown.style.display = 'none';
      isDropdownOpen = false;
      console.log(isDropdownOpen);
    };

    const detectClickOutside = function () {
      if (isDropdownOpen === false) return;

      document.addEventListener('click', (event) => {
        if (isDropdownOpen === true)
          if (event.target.closest('.dropdown')) {
            detectSelection(event.target);
            close();
          } else {
            close();
          }
      });
    };

    const detectSelection = function (target) {
      let selection;
      const placeholder = document.getElementById('placeholder-flag');

      if (target.children.length > 0) {
        selection = target.firstChild;
      } else {
        selection = target;
      }

      console.log(selection);
      placeholder.src = selection.src;
    };

    return { render };
  })();

  return { priorityDropdown, render };
})();
