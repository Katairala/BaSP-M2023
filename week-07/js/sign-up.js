var submitButton = document.getElementById('submit');
var nameInput = document.getElementById('name');
var lastNameInput = document.getElementById('lastname');
var emailInput = document.getElementById('email');
var passwordField = document.getElementById('password');
var repeatPasswordField = document.getElementById('Repeat');
var dateField = document.getElementById('date');
var IDField = document.getElementById('ID');
var phoneField = document.getElementById('phone');
var zipInput = document.getElementById('zip');
var cityInput = document.getElementById('City');
var addressInput = document.getElementById('address');

nameInput.addEventListener('blur', validateName);
nameInput.addEventListener('focus', clearNameError);
lastNameInput.addEventListener('blur', validateLastName);
lastNameInput.addEventListener('focus', clearLastNameError);
emailInput.addEventListener('blur', validateEmail);
emailInput.addEventListener('focus', clearEmail);
passwordField.addEventListener('blur', validatePassword);
passwordField.addEventListener('focus', clearPassword);
repeatPasswordField.addEventListener('blur', validateRepeatPassword);
repeatPasswordField.addEventListener('focus', clearRepeatPassword);
dateField.addEventListener('blur', validateDate);
dateField.addEventListener('focus', clearDate);
IDField.addEventListener('blur', validateID);
IDField.addEventListener('focus', clearID);
phoneField.addEventListener('blur', validatePhone);
phoneField.addEventListener('focus', clearPhone);
zipInput.addEventListener('blur', validateZip);
zipInput.addEventListener('focus', clearZip);
cityInput.addEventListener('blur', validateCity);
cityInput.addEventListener('focus', clearCity);
addressInput.addEventListener('blur', validateAddress);
addressInput.addEventListener('focus', clearAddress);

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

function clearRepeatPassword() {
  document.getElementById('repeat-error').textContent = '';
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
      document.getElementById('id-error').textContent =
        'ID must contain only numbers';
      return;
    }
  }

  if (idInput.length < 8) {
    document.getElementById('id-error').textContent =
      'ID must be at least 8 digits long';
    return;
  }
}

function clearID() {
  document.getElementById('id-error').textContent = '';
}

function validatePhone() {
  var phone = phoneField.value;
  var phoneError = document.getElementById('phone-error');
  var numbers = '0123456789';
  for (var i = 0; i < phone.length; i++) {
    if (numbers.indexOf(phone[i]) === -1) {
      phoneError.textContent = 'Phone number field must contain only numbers';
      return;
    }
  }
  if (phone.length !== 10) {
    phoneError.textContent = 'Phone number field must have 10 digits';
  } else {
    phoneError.textContent = '';
  }
}

function clearPhone() {
  var phoneError = document.getElementById('phone-error');
  phoneError.textContent = '';
}

function validateZip() {
  var zip = zipInput.value;
  var zipError = document.getElementById('zip-error');
  var numbers = '0123456789';
  for (var i = 0; i < zip.length; i++) {
    if (numbers.indexOf(zip[i]) === -1) {
      zipError.textContent =
        'Zip must contain only numbers and have between 4 and 5 digits';
      return;
    }
  }
  if (zip.length < 4 || zip.length > 5) {
    zipError.textContent =
      'Zip must contain only numbers and have between 4 and 5 digits';
  } else {
    zipError.textContent = '';
  }
}

function clearZip() {
  var zipError = document.getElementById('zip-error');
  zipError.textContent = '';
}

function validateCity() {
  var city = cityInput.value;
  var cityError = document.getElementById('city-error');
  var alphanumeric =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  if (city.length < 3) {
    cityError.textContent =
      'City must contain at least 3 alphanumeric characters';
  } else {
    for (var i = 0; i < city.length; i++) {
      if (alphanumeric.indexOf(city[i]) === -1) {
        cityError.textContent =
          'City must contain at least 3 alphanumeric characters';
        return;
      }
    }
    cityError.textContent = '';
  }
}

function clearCity() {
  var cityError = document.getElementById('city-error');
  cityError.textContent = '';
}

function validateAddress() {
  var address = addressInput.value;
  var addressError = document.getElementById('address-error');
  var alphanumeric =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  if (address.length < 5) {
    addressError.textContent =
      'Address must contain at least 5 characters with letters and numbers';
  } else {
    var spaceIndex = address.indexOf(' ');
    if (
      spaceIndex === -1 ||
      spaceIndex === 0 ||
      spaceIndex === address.length - 1
    ) {
      addressError.textContent =
        'Address must contain at least 5 characters with letters and numbers';
    } else {
      var firstPart = address.substring(0, spaceIndex);
      var secondPart = address.substring(spaceIndex + 1);
      for (var i = 0; i < firstPart.length; i++) {
        if (alphanumeric.indexOf(firstPart[i]) === -1) {
          addressError.textContent =
            'Address must contain at least 5 characters with letters and numbers';
          return;
        }
      }
      addressError.textContent = '';
    }
  }
}

function clearAddress() {
  var addressError = document.getElementById('address-error');
  addressError.textContent = '';
}

submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  var isNameValid = validateName();
  var isLastNameValid = validateLastName();
  var isEmailValid = validateEmail();
  var isPasswordValid = validatePassword();
  var isDateValid = validateDate();
  var isIdValid = validateID();
  var isPhoneValid = validatePhone();
  var isZipValid = validateZip();
  var isCityValid = validateCity();
  var isAddressValid = validateAddress();

  var signUp =
    isNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isPasswordValid &&
    isDateValid &&
    isIdValid &&
    isPhoneValid &&
    isZipValid &&
    isCityValid &&
    isAddressValid;
  if (signUp) {
    alert(
      'Name: ' +
      nameInput.value.trim() +
        '\nLast name: ' +
        lastNameInput.value.trim() +
        '\nID: ' +
        idInput.value +
        '\nDate of birth: ' +
        dateInput +
        '\nPhone number: ' +
        phoneField.value +
        '\nAddress: ' +
       addressInput.value +
        '\nCity: ' +
        cityInput.value +
        '\nZip code: ' +
        zipInput.value +
        '\nEmail: ' +
        emailInput.value.trim() +
        '\nPassword: ' +
        passwordField.value 
    );
  } else {
    alert('One or more of the fields are not valid.');
  }
});
