var submitButton = document.getElementById('submit');
var nameInput = document.getElementById('name');
var nameError = document.getElementById('name-error');
var lastNameInput = document.getElementById('lastname');
var lastNameError = document.getElementById('lastname-error');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var repeatPasswordInput = document.getElementById('Repeat');
var dateInput = document.getElementById('date');
var idInput = document.getElementById('ID');
var phoneInput = document.getElementById('phone');
var zipInput = document.getElementById('zip');
var cityInput = document.getElementById('City');
var addressInput = document.getElementById('address');
var url = 'https://api-rest-server.vercel.app/signup';

nameInput.addEventListener('blur', validateName);
nameInput.addEventListener('focus', clearNameError);
lastNameInput.addEventListener('blur', validateLastName);
lastNameInput.addEventListener('focus', clearLastNameError);
emailInput.addEventListener('blur', validateEmail);
emailInput.addEventListener('focus', clearEmail);
passwordInput.addEventListener('blur', validatePassword);
passwordInput.addEventListener('focus', clearPassword);
repeatPasswordInput.addEventListener('blur', validateRepeatPassword);
repeatPasswordInput.addEventListener('focus', clearRepeatPassword);
dateInput.addEventListener('blur', validateDate);
dateInput.addEventListener('focus', clearDate);
idInput.addEventListener('blur', validateID);
idInput.addEventListener('focus', clearID);
phoneInput.addEventListener('blur', validatePhone);
phoneInput.addEventListener('focus', clearPhone);
zipInput.addEventListener('blur', validateZip);
zipInput.addEventListener('focus', clearZip);
cityInput.addEventListener('blur', validateCity);
cityInput.addEventListener('focus', clearCity);
addressInput.addEventListener('blur', validateAddress);
addressInput.addEventListener('focus', clearAddress);

function validateName() {
  var name = nameInput.value.trim();

  for (var i = 0; i < name.length; i++) {
    var charCode = name.charCodeAt(i);
    if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
      nameError.textContent = 'The name must contain only Letters!';
      return;
    }
  }
  if (name.length < 3) {
    nameError.textContent = 'The name must contain at least 3 letters!';
    return;
  }
  nameError.textContent = '';

  return true;
}

function clearNameError() {
  nameError.textContent = '';
}

function validateLastName() {
  var lastName = lastNameInput.value.trim();
  for (var i = 0; i < lastName.length; i++) {
    var charCode = lastName.charCodeAt(i);
    if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
      lastNameError.textContent = 'El apellido debe contener solo letras.';
      return;
    }
  }
  if (lastName.length < 3) {
    lastNameError.textContent = 'El apellido debe tener al menos 3 caracteres.';
    return;
  }
  lastNameError.textContent = '';

  return true;
}

function clearLastNameError() {
  lastNameError.textContent = '';
}

function validateEmail() {
  var email = emailInput.value.trim();
  var emailError = document.getElementById('email-error');

  if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email)) {
    emailError.textContent = 'Please enter a valid email.';
  } else {
    emailError.textContent = '';
    return true;
  }
}

function clearEmail() {
  var emailError = document.getElementById('email-error');
  emailError.textContent = '';
}

function validatePassword() {
  var password = passwordInput.value;
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

  return true;
}

function clearPassword() {
  passwordInput.value = '';
  document.getElementById('password-error').textContent = '';
}

function validateRepeatPassword() {
  var password = passwordInput.value;
  var repeatPassword = repeatPasswordInput.value;

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
  var dateEl = dateInput.split('-');
  var formattedDate = dateEl[2] + '/' + dateEl[1] + '/' + dateEl[0];
  var dateOfBirth = new Date(formattedDate);
  var currentDate = new Date();
  var adultDate = new Date();
  adultDate.setFullYear(currentDate.getFullYear() - 18);
  if (dateOfBirth > adultDate) {
    document.getElementById('date-error').textContent = 'You must be an adult';
    return false;
  }
  document.getElementById('date-error').textContent = '';
  return true;
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

  return true;
}

function clearID() {
  document.getElementById('id-error').textContent = '';
}

function validatePhone() {
  var phone = phoneInput.value;
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
    return true;
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
    return true;
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
  return true;
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

  return true;
}

function clearAddress() {
  var addressError = document.getElementById('address-error');
  addressError.textContent = '';
}

submitButton.addEventListener('click', function (event) {
  event.preventDefault();

  var isFormValid = true;

  isFormValid = validateName() && isFormValid;
  isFormValid = validateLastName() && isFormValid;
  isFormValid = validateEmail() && isFormValid;
  isFormValid = validatePassword() && isFormValid;
  isFormValid = validateRepeatPassword() && isFormValid;
  isFormValid = validateDate() && isFormValid;
  isFormValid = validateID() && isFormValid;
  isFormValid = validatePhone() && isFormValid;
  isFormValid = validateZip() && isFormValid;
  isFormValid = validateCity() && isFormValid;
  isFormValid = validateAddress() && isFormValid;

  if (isFormValid) {
    fetch(`${url}?name=${nameInput.value}&lastName=${lastNameInput.value}&email=${emailInput.value}
    &password=${passwordInput.value}&date=${dateInput.value}&id=${idInput.value}&phone=${phoneInput.value}&
    zip=${zipInput.value}&city=${cityInput.value}&address=${addressInput.value}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var formData = {
          name: nameInput.value,
          lastName: lastNameInput.value,
          email: emailInput.value,
          password: passwordInput.value,
          date: dateInput.value,
          id: idInput.value,
          phone: phoneInput.value,
          zip: zipInput.value,
          city: cityInput.value,
          address: addressInput.value,
        };
        localStorage.setItem('formData', JSON.stringify(formData));

        alert(
          'Successful registration:\nName: ' +
            nameInput.value +
            '\nLast-Name: ' +
            lastNameInput.value +
            '\nEmail: ' +
            emailInput.value +
            '\nPassword: ' +
            passwordInput.value +
            '\nBirthdate: ' +
            dateInput.value +
            '\nID: ' +
            idInput.value +
            '\nPhone: ' +
            phoneInput.value +
            '\nZip: ' +
            zipInput.value +
            '\nCity: ' +
            cityInput.value +
            '\nAddress: ' +
            addressInput.value
        );
      })
      .catch(function (error) {
        alert(error.msg);
      });
  } else {
    alert('Please correct the errors in the form');
  }
});

window.onload = function () {
  var formData = localStorage.getItem('formData');
  if (formData) {
    formData = JSON.parse(formData);
    nameInput.value = formData.name;
    lastNameInput.value = formData.lastName;
    emailInput.value = formData.email;
    passwordInput.value = formData.password;
    dateInput.value = formData.date;
    idInput.value = formData.id;
    phoneInput.value = formData.phone;
    zipInput.value = formData.zip;
    cityInput.value = formData.city;
    addressInput.value = formData.address;
  }
};
