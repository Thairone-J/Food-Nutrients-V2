import { validateForm } from '../utils/authFormValidation.js';
import { createButton, createContainer, createForm, createInput } from '../utils/domUtils.js';

export const loginPage = {
  render: (parentElement) => {
    const loginPageContainer = createContainer('loginPageContainer', 'login-page-container');
    const authContainer = createContainer('authContainer', 'auth-container');
    loginPageContainer.appendChild(authContainer);
    parentElement.appendChild(loginPageContainer);

    renderStartMenu(authContainer);
  },
};

const renderStartMenu = (parentElement) => {
  const startMenuContainer = createContainer('startMenuContainer', 'start-menu-container');

  const loginButton = createButton('button', 'loginButton', 'LOGIN');
  loginButton.addEventListener('click', () => {
    renderAuthForm('LOGIN');
  });

  const registerButton = createButton('button', 'registerButton', 'REGISTER');
  registerButton.addEventListener('click', () => {
    renderAuthForm('REGISTER');
  });

  startMenuContainer.append(loginButton, registerButton);
  parentElement.appendChild(startMenuContainer);
};

const renderAuthForm = (submitType) => {
  const authContainer = document.querySelector('#authContainer');
  while (authContainer.firstChild) {
    authContainer.removeChild(authContainer.firstChild);
  }
  const formContainer = createContainer('formContainer', 'form-container');
  const form = createForm('authForm', 'auth-form');
  const usernameInput = createInput('text', 'usernameFormInput', 'username', 'Username', true);
  const passwordInput = createInput('password', 'passwordFormInput', 'password', 'Password', true);
  const notificationContainer = createContainer('authFormNotification', 'auth-form-notification');
  const submitButton = createButton('submit', 'authFormSubmitButton', submitType);

  submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    validateForm(username, password, submitType);
  });

  form.append(usernameInput, passwordInput, notificationContainer, submitButton);

  formContainer.appendChild(form);
  authContainer.appendChild(formContainer);
};
