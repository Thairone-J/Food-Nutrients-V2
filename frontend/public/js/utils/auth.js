import layout from '../pages/main_layout.js';
import apiServices from '../services/apiServices.js';
import state from './state.js';

const authStateRedirect = async () => {
  const token = localStorage.getItem('token');
  const app = document.querySelector('#app');

  const tokenIsValid = token && (await apiServices.authUser(token));

  if (tokenIsValid) {
    layout.renderMainContainer(app);
  } else {
    layout.renderLoginContainer(app);
  }
};

export default authStateRedirect;
