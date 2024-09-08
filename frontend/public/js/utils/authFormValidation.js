import notifications from '../utils/notifications.js';

export const validateForm = (username, password, submitType) => {
  if (!username || !password) {
    const notificationContainer = document.querySelector('#authFormNotification');
    notifications.render(notificationContainer, ' All fields is necessary ⚠️');
  } else {
    switch (submitType) {
      case 'LOGIN':
        const token = localStorage.getItem('token');
        auth.login(username, password, token);
        break;
      case 'REGISTER':
        auth.register(username, password);
        break;

      default:
        return;
    }
  }
};

const auth = {
  login: (username, password, token) => {},
  register: (username, password) => {},
};
