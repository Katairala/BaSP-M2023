var nameInput = document.getElementById('name');
var lastNameInput = document.getElementById('lastname');
var emailInput = document.getElementById('email');
var passwordField = document.getElementById('password');
var repeatPasswordField = document.getElementById('Repeat');
var dateField = document.getElementById('date');
var IDField = document.getElementById('ID');

nameInput.addEventListener('blur', validateName);
nameInput.addEventListener('focus', clearNameError);
lastNameInput.addEventListener('blur', validateLastName);
lastNameInput.addEventListener('focus', clearLastNameError);
emailInput.addEventListener('blur', validateEmail);
emailInput.addEventListener('focus', clearEmail);
passwordField.addEventListener('blur', validatePassword);
passwordField.addEventListener('focus', clearPassword);
repeatPasswordField.addEventListener('blur', validateRepeatPassword);
dateField.addEventListener('blur', validateDate);
dateField.addEventListener('focus', clearDate);
IDField.addEventListener('blur', validateID);
IDField.addEventListener('focus', clearID);

function validateName() {
  var name = nameInput.value.trim();
  var nameError = document.getElementById('name-error');
  for (var i = 0; i < name.length; i++) {
    var charCode = name.charCodeAt(i);
    if (
      ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) ||
      name.length < 3
    ) {
      nameError.textContent =
        'Name must contain only letters and have at least 3 characters.';
      return;
    }
  }
  nameError.textContent = '';
}

function clearNameError() {
  var nameError = document.getElementById('name-error');
  nameError.textContent = '';
}

function validateLastName() {
  var lastName = lastNameInput.value.trim();
  var lastNameError = document.getElementById('lastname-error');
  for (var i = 0; i < lastName.length; i++) {
    var charCode = lastName.charCodeAt(i);
    if (
      ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) ||
      lastName.length < 3
    ) {
      lastNameError.textContent =
        'Last name must contain only letters and have at least 3 characters.';
      return;
    }
  }
  lastNameError.textContent = '';
}

function clearLastNameError() {
  var lastNameError = document.getElementById('lastname-error');
  lastNameError.textContent = '';
}

function validateEmail() {
  var email = emailInput.value.trim();
  var emailError = document.getElementById('email-error');

  if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email)) {
    emailError.textContent = 'Please enter a valid email.';
  } else {
    emailError.textContent = '';
  }
}

function clearEmail() {
  var emailError = document.getElementById('email-error');
  emailError.textContent = '';
}

function validatePassword() {
  var password = passwordField.value;
  var hasLetter = false;
  var hasNumber = false;

  for (var i = 0; i < password.length; i++) {
    var charCode = password.charCodeAt(i);
    if (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)
    ) {
      hasLetter = true;
    } else if (
      !isNaN(parseInt(password.charAt(i))) &&
      isFinite(password.charAt(i))
    ) {
      hasNumber = true;
    }
  }

  if (password.length < 8 || !hasLetter || !hasNumber) {
    document.getElementById('password-error').textContent =
      'Password must contain at least 8 characters, one letter and one number.';
    return;
  }
  document.getElementById('password-error').textContent = '';
}

function clearPassword() {
  passwordField.value = '';
  document.getElementById('password-error').textContent = '';
}

function validateRepeatPassword() {
  var password = passwordField.value;
  var repeatPassword = repeatPasswordField.value;

  if (repeatPassword !== password) {
    document.getElementById('repeat-error').textContent =
      'Passwords do not match.';
    return false;
  }
  document.getElementById('repeat-error').textContent = '';
  return true;
}

function clearPassword() {
  passwordField.value = '';
  document.getElementById('password-error').textContent = '';
}

function validateDate() {
  var dateInput = document.getElementById('date').value;
  var dateOfBirth = new Date(dateInput);
  var currentDate = new Date();
  var adultDate = new Date();
  adultDate.setFullYear(currentDate.getFullYear() - 18); 
  if (dateOfBirth > adultDate) {
    document.getElementById('date-error').textContent = 'You must be an adult';
  }
}

function clearDate() {
  document.getElementById('date-error').textContent = '';
}

function validateID() {
  var idInput = document.getElementById('ID').value;
  for (var i = 0; i < idInput.length; i++) {
    var charCode = idInput.charCodeAt(i);
    if (charCode < 48 || charCode > 57) {
      document.getElementById('id-error').textContent = 'ID must contain only numbers';
      return;
    }
  }

  if (idInput.length < 8) {
    document.getElementById('id-error').textContent = 'ID must be at least 8 digits long';
    return;
  }
}

function clearID() {
  document.getElementById('id-error').textContent = '';
}






