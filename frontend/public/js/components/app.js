import authStateRedirect from '../utils/auth.js';

const application = {
  init: () => {
    authStateRedirect();
  },
};

export default application;
