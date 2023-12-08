export const addTaskPrompt = (function () {
  const renderProto = function (target) {
    const promptWrapper = document.createElement('div');
    promptWrapper.classList.add('add-task-wrapper');

    let promptHeaderWrapper, promptFormWrapper, promptSubmitWrapper;

    const elementsArray = [
      promptHeaderWrapper,
      promptFormWrapper,
      promptSubmitWrapper,
    ];

    const elementsClassArray = [
      'add-task-prompt-header',
      'add-task-prompt-form',
      'add-task-prompt-submit',
    ];

    for (let i = 0; i < elementsArray.length; i++) {
      elementsArray[i] = document.createElement('div');
      elementsArray[i].id = elementsClassArray[i];
      promptWrapper.appendChild(elementsArray[i]);
    }

    target.appendChild(promptWrapper);
  };

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
        submit: 'submit',
      },
      type: {
        text: 'text',
        date: 'date',
        submit: 'submit',
      },
      id: {
        submit: 'submit-button',
      },
      placeholder: {
        title: 'Title...',
        description: 'Description...',
      },
    };

    for (let i = 0; i < 4; i++) {
      let label = document.createElement('label');
      let input = document.createElement('input');
      let target;

      switch (i) {
        case 0:
          label.for = prop.attr.title;
          input.type = prop.type.text;
          input.name = prop.attr.title;
          input.id = prop.attr.title;
          input.placeholder = prop.placeholder.title;
          target = document.getElementById(idArray[0]);
          break;
        case 1:
          label.for = prop.attr.description;
          input.type = prop.type.text;
          input.name = prop.attr.description;
          input.id = prop.attr.description;
          input.placeholder = prop.placeholder.description;
          target = document.getElementById(idArray[1]);
          break;
        case 2:
          label.for = prop.attr.date;
          input.type = prop.type.date;
          input.name = prop.attr.date;
          input.id = prop.attr.date;
          target = document.getElementById(idArray[2]);
          break;
        case 3:
          label.for = prop.attr.submit;
          input.type = prop.type.submit;
          input.value = 'Add';
          input.id = prop.id.submit;
          target = document.getElementById(idArray[2]);
          break;
        default:
          break;
      }
      label.appendChild(input);
      target.appendChild(label);
    }
  };

  return { render };
})();
