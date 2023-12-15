import { imageCache } from '.';

export const addTaskPrompt = (function () {
  const renderPriorityDropdown = function () {
    const dropdownBtnIcon = document.getElementById('dropdown-btn-icon');
    dropdownBtnIcon.src = imageCache['./dropdown-icon.svg'];
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

const protoRender = (function () {
  const render = function (target) {
    const promptWrapper = document.createElement('div');
    promptWrapper.classList.add('add-task-wrapper');
    const closeButton = document.createElement('button');

    let promptHeaderWrapper, promptFormWrapper, promptSubmitWrapper;

    const elementsArray = [
      promptHeaderWrapper,
      promptFormWrapper,
      promptSubmitWrapper,
    ];

    const idArray = [
      'add-task-prompt-header',
      'add-task-prompt-form',
      'add-task-prompt-submit',
    ];

    for (let i = 0; i < elementsArray.length; i++) {
      elementsArray[i] = document.createElement('div');
      elementsArray[i].id = idArray[i];
      promptWrapper.appendChild(elementsArray[i]);
    }

    target.appendChild(promptWrapper);

    const form = document.createElement('form');
    promptWrapper.appendChild(form);

    const prop = {
      attr: {
        title: 'title',
        description: 'description',
        date: 'date',
        priority: 'priority',
        submit: 'submit',
      },
      type: {
        text: 'text',
        date: 'date',
        submit: 'submit',
      },
      id: {
        submit: 'submit-button',
        priority: 'priority-dropdown',
      },
      class: {
        formLabel: 'add-form-label',
        formInput: 'add-form-input',
      },
      placeholder: {
        title: 'Title...',
        description: 'Description...',
      },
    };

    for (let i = 0; i < 5; i++) {
      let label = document.createElement('label');
      let input = document.createElement('input');
      let textArea = document.createElement('textarea');
      let select = document.createElement('select');
      let target;

      switch (i) {
        case 0:
          label.setAttribute('for', `${prop.attr.title}`);
          label.classList.add(prop.class.formLabel);
          input.type = prop.type.text;
          input.name = prop.attr.title;
          input.id = prop.attr.title;
          input.classList.add(prop.class.formInput);
          input.placeholder = prop.placeholder.title;
          target = document.getElementById(idArray[0]);
          break;
        case 1:
          label.setAttribute('for', `${prop.attr.description}`);
          label.classList.add(prop.class.formLabel);
          textArea.id = prop.attr.description;
          textArea.classList.add(prop.class.formInput);
          textArea.placeholder = prop.placeholder.description;
          target = document.getElementById(idArray[1]);
          break;
        case 2:
          label.setAttribute('for', `${prop.attr.date}`);
          input.type = prop.type.date;
          input.name = prop.attr.date;
          input.id = prop.attr.date;
          target = document.getElementById(idArray[2]);
          break;
        case 3:
          // BUILD A CUSTOM DROPDOWN WITH FLAGS
          label.setAttribute('for', `${prop.attr.priority}`);
          select.name = prop.attr.priority;
          select.id = prop.id.priority;
          target = document.getElementById(idArray[2]);
          break;
        case 4:
          label.setAttribute('for', `${prop.attr.submit}`);
          input.type = prop.type.submit;
          input.value = 'Add';
          input.id = prop.id.submit;
          target = document.getElementById(idArray[2]);
          break;

        default:
          break;
      }

      if (i === 1) {
        label.appendChild(textArea);
      } else {
        label.appendChild(input);
      }

      target.appendChild(label);
    }
  };
})();
