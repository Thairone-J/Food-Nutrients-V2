// domUtils

/**
 * Create an HTML input element.
 *
 * @param {string} type - The type of the input (e.g., 'text', 'email').
 * @param {string} id - The id of the input element.
 * @param {string} name - The name of the input element.
 * @param {string} placeholder - The placeholder text for the input.
 * @param {boolean} isRequired - Whether the input is required or not.
 * @returns {HTMLInputElement} The created input element.
 */

export const createInput = (type, id, name, placeholder, isRequired) => {
  const input = document.createElement('input');
  input.type = type;
  input.id = id;
  input.name = name;
  input.placeholder = placeholder;
  input.required = isRequired;

  return input;
};

/**
 * Create an HTML button element.
 *
 * @param {string} type - The type of the button (e.g., 'button', 'submit').
 * @param {string} id - The id of the button element.
 * @param {string} textContent - The text displayed on the button.
 * @returns {HTMLButtonElement} The created button element.
 */

export const createButton = (type, id, textContent) => {
  const button = document.createElement('button');
  button.type = type;
  button.id = id;
  button.textContent = textContent;

  return button;
};

/**
 * Create a container div element.
 *
 * @param {string} id - The id of the container.
 * @param {string} className - The class name(s) for the container.
 * @returns {HTMLDivElement} The created div container element.
 */

export const createContainer = (id, className) => {
  const container = document.createElement('div');
  container.id = id;
  container.className = className;

  return container;
};

/**
 * Create an HTML form element.
 *
 * @param {string} id - The id of the form element.
 * @param {string} className - The class name(s) for the form element.
 * @param {object} [options] - Optional settings for the form.
 * @param {string} [options.action] - The URL where the form data will be sent.
 * @param {string} [options.method] - The HTTP method to use for the form submission.
 * @returns {HTMLFormElement} The created form element.
 */

export const createForm = (id, className, options = {}) => {
  const form = document.createElement('form');
  form.id = id;
  form.className = className;

  if (options.action) form.action = options.action;
  if (options.method) form.method = options.method;

  return form;
};
