import { createButton, createContainer } from '../utils/domUtils.js';

const sidebar = {
  render: (parentElement) => {
    const container = createContainer('sidebarContainer', 'sidebar-container');

    const navButtons = createContainer('navButtons', 'nav-buttons');
    const myMealsButton = createButton('button', 'myMealsButton', 'My Meals');
    const searchButton = createButton('button', 'searchButton', 'Search Food');
    navButtons.append(myMealsButton, searchButton);

    const userStats = createContainer('userStats', 'user-stats');

    container.append(navButtons, userStats);

    parentElement.appendChild(container);
  },
};

export default sidebar;
