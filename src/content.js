import { currentPage, headingWrapper } from './index.js';
import { format } from 'date-fns';
import slothImgSrc from './assets/sloth.png';

export let isNoTaskPageRendered = false;

export const content = (function () {
  const home = function () {
    renderHomeHeading();
    currentPage = 'home';
  };

  const renderHomeHeading = function () {
    if (currentPage === 'home') return;

    //Heading
    let mainHeading = document.createElement('h1');
    mainHeading.textContent = 'Home';
    mainHeading.id = 'main-heading';
    headingWrapper.appendChild(mainHeading);

    //Date
    let dateHeader = document.createElement('h1');
    dateHeader.id = 'date-header';
    let date = format(new Date(), 'E do MMM yyyy');
    dateHeader.textContent = date;
    headingWrapper.appendChild(dateHeader);
  };

  const toggleHidden = function (target) {
    target.classList.toggle('hidden');
  };

  const renderNoTaskPage = function (target) {
    let noTaskWrapper = document.createElement('div');
    let imgWrapper = document.createElement('div');
    let slothImg = document.createElement('img');
    let noTaskText = document.createElement('p');

    // Wrapper
    noTaskWrapper.id = 'no-task-wrapper';
    imgWrapper.id = 'sloth-image-wrapper';

    // Image
    slothImg.id = 'sloth-image';
    slothImg.src = slothImgSrc;
    imgWrapper.appendChild(slothImg);
    noTaskWrapper.appendChild(imgWrapper);

    // Text
    noTaskText.id = 'no-task-text';
    noTaskText.textContent = "Hooray! You've got nothing to do!";
    noTaskWrapper.appendChild(noTaskText);

    target.appendChild(noTaskWrapper);
    isNoTaskPageRendered = true;
  };

  const removeNoTaskPage = function () {
    if (isNoTaskPageRendered === false) return;
    let noTask = document.getElementById('no-task-wrapper');
    if (noTask === undefined || noTask === null) return;
    noTask.remove();
  };

  const clear = function (target) {
    while (target.firstChild) {
      target.removeChild(target.firstChild);
    }
  };

  return {
    home,
    renderHomeHeading,
    renderNoTaskPage,
    removeNoTaskPage,
    toggleHidden,
    clear,
  };
})();
