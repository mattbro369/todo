// DOM Cache
import { mainContent } from '.';

export const render = (function () {
  const home = function () {
    let div = document.createElement('div');
    div.textContent = 'Hello world';
    mainContent.appendChild(div);
  };

  return { home };
})();
