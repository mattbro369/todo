export const addTaskPrompt = (function () {
  const render = function (target) {
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

  return { render };
})();
