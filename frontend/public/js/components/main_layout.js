import { createContainer } from '../utils/domUtils.js';
import { loginPage } from './login_page.js';
import sidebar from './sidebar.js';

const layout = {
  renderLoginContainer: (parentElement) => {
    parentElement.innerHTML = '';
    loginPage.render(parentElement);
  },
  renderMainContainer: (parentElement) => {
    parentElement.innerHTML = '';
    const mainContainer = createContainer('layoutMainContainer', 'layout-main-container');
    const sideContainer = createContainer('layoutSideContainer', 'layout-side-container');
    const contentContainer = createContainer('layoutContentContainer', 'layout-content-container');


    sidebar.render(sideContainer);
    










    mainContainer.append(sideContainer, contentContainer);
    parentElement.appendChild(mainContainer);
  },
};

export default layout;
