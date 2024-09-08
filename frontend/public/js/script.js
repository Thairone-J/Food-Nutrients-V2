import { layout } from './pages/main_layout.js';
import state from './utils/state.js';

const app = document.querySelector('#app');

if (!state.user.isLogged) {
  layout.renderLoginContainer(app);
} else {
  layout.renderMainContainer(app);
}
