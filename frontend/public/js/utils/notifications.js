const notifications = {
  render: (parentElement, message) => {
    parentElement.textContent = message;
    setTimeout(() => {
      parentElement.textContent = '';
    }, 3000);
  },
};

export default notifications;
