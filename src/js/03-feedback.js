import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

const saveFormData = () => {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};
form.addEventListener('input', throttle(saveFormData, 500));

const loadFormData = () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    if (email) emailInput.value = email;
    if (message) messageTextarea.value = message;
  }
};

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageTextarea.value = '';
});

document.addEventListener('DOMContentLoaded', loadFormData);
