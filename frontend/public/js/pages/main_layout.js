import { createContainer } from '../utils/domUtils.js';
import { loginPage } from './login_page.js';

export const layout = {
  renderLoginContainer: (parentElement) => {
    while (parentElement.firstChild) {
      parentElement.remove();
    }
    loginPage.render(parentElement);
  },
  renderMainContainer: (parentElement) => {
    while (parentElement.firstChild) {
      parentElement.remove();
    }
    const mainContainer = createContainer('layoutMainContainer', 'layout-main-container');
    const sideContainer = createContainer('layoutSideContainer', 'layout-side-container');
    const contentContainer = createContainer('layoutContentContainer', 'layout-content-container');

    mainContainer.append(sideContainer, contentContainer);
    parentElement.appendChild(mainContainer);
  },
};
