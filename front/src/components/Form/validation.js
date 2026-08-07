const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const exLongChar = /^(?=.{1,35}$).+/;
const regexPassword = /^(?=.*\d)[0-9a-zA-Z]{6,10}$/;

function validation(data) {
  const errors = {};

  if (!regexEmail.test(data.email)) errors.email = 'Invalid email address';
  if (!exLongChar.test(data.email)) errors.email = 'Email length must be between 1 and 35 characters';
  if (!regexPassword.test(data.password)) errors.password = 'Password must contain between 6 and 10 characters and at least one number';

  return errors;
}

export default validation;