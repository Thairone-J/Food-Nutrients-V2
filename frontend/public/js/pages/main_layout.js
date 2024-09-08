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
    const mainContainer = document.createElement('div');
    mainContainer.id = 'layoutMainContainer';
    mainContainer.className = 'layout-main-container';

    const sideContainer = document.createElement('div');
    sideContainer.id = 'layoutSideContainer';
    sideContainer.className = 'layout-side-container';

    const contentContainer = document.createElement('div');
    contentContainer.id = 'layoutContentContainer';
    contentContainer.className = 'layout-content-container';

    mainContainer.append(sideContainer, contentContainer);
    parentElement.appendChild(mainContainer);
  },
};
