var passwordInput = document.getElementById('password');
var errorMessage = document.getElementById('errorMessage');
var emailInput = document.getElementById('email');
var emailError = document.getElementById('emailError');
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var submitButton = document.getElementById('submit');

passwordInput.addEventListener('blur', function () {
  var password = passwordInput.value;
  var containsLetter = false;
  var containsNumber = false;

  for (var i = 0; i < password.length; i++) {
    var char = password.charAt(i);
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
      containsLetter = true;
    } else if (char >= '0' && char <= '9') {
      containsNumber = true;
    }
  }

  if (!containsLetter || !containsNumber) {
    errorMessage.textContent =
      'One or more fields are incorrect';
    errorMessage.removeAttribute('hidden');
  }
});

passwordInput.addEventListener('focus', function () {
  errorMessage.setAttribute('hidden', '');
});

emailInput.addEventListener('blur', function () {
  var email = emailInput.value;
  if (!emailExpression.test(email)) {
    emailError.textContent = 'Please enter a valid email.';
    emailError.removeAttribute('hidden');
  }
});

emailInput.addEventListener('focus', function () {
  emailError.setAttribute('hidden', '');
});

submitButton.addEventListener('click', function () {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (!emailExpression.test(email)) {
    alert('Email is not valid');
  } else if (!containsLetterAndNumber(password)) {
    alert('One or more fields are incorrect');
  } else {
    alert('Email: ' + email + '\nPassword: ' + password);
  }
});

function containsLetterAndNumber(password) {
  var hasNumber = false;
  var hasLetter = false;
  for (var i = 0; i < password.length; i++) {
    var character = password.charAt(i);
    if (!isNaN(character) && character != ' ') {
      hasNumber = true;
    } else if (character.toUpperCase() != character.toLowerCase()) {
      hasLetter = true;
    }
    if (hasNumber && hasLetter) {
      return true;
    }
  }
  return false;
}
