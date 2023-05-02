var passwordInput = document.getElementById('password');
var emailInput = document.getElementById('email');
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var submitButton = document.getElementById('submit');
var url = 'https://api-rest-server.vercel.app/login';

passwordInput.addEventListener('blur', validatePassword);
passwordInput.addEventListener('focus', clearPassword);
emailInput.addEventListener('blur', validateEmail);
emailInput.addEventListener('focus', clearEmail);

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
      'One of the fields are not valid.';
    return false;
  }
  document.getElementById('password-error').textContent = '';
  return true;
}

function clearPassword() {
  passwordInput.value = '';
  document.getElementById('password-error').textContent = '';
}

function validateEmail() {
  var email = emailInput.value.trim();
  var emailError = document.getElementById('email-error');

  if (!emailExpression.test(email)) {
    emailError.textContent = 'Please enter a valid email.';
    return false;
  } else {
    emailError.textContent = '';
    return true;
  }
}

function clearEmail() {
  var emailError = document.getElementById('email-error');
  emailError.textContent = '';
}

submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  var isEmailValid = validateEmail();
  var isPasswordValid = validatePassword();

  if (!isEmailValid || !isPasswordValid) {
    alert('One of the fields are not valid.');
    return;
  }

  fetch(`${url}?email=${emailInput.value}&password=${passwordInput.value}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.success) {
        alert('Successful Login! ' + data.msg);
      } else {
        alert('Login failed: ' + data.msg);
      }
    })
    .catch(function (error) {
      alert(error.msg);
    });
});




