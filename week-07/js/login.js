var passwordInput = document.getElementById('password');
var emailInput = document.getElementById('email');
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var submitButton = document.getElementById('submit');
var modal = document.getElementById('myModal');
var modalTitle = document.getElementById('modal-tittle');
var modalText = document.getElementById('modal-text');
var exitButton = document.getElementById('exit');
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
    passwordInput.classList.add('error');
    return false;
  }
  document.getElementById('password-error').textContent = '';
  return true;
}

function clearPassword() {
  passwordInput.value = '';
  document.getElementById('password-error').textContent = '';
  passwordInput.classList.remove('error');
}

function validateEmail() {
  var email = emailInput.value.trim();
  var emailError = document.getElementById('email-error');
  if (!emailExpression.test(email)) {
    emailError.textContent = 'Please enter a valid email.';
    emailInput.classList.add('error');
    return false;
  } else {
    emailError.textContent = '';
    return true;
  }
}

function clearEmail() {
  var emailError = document.getElementById('email-error');
  emailError.textContent = '';
  emailInput.classList.remove('error');
}

submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  var isEmailValid = validateEmail();
  var isPasswordValid = validatePassword();
  if (!isEmailValid || !isPasswordValid) {
    showModal('One of the fields are not valid.');
    return;
  }

  fetch(`${url}?email=${emailInput.value}&password=${passwordInput.value}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.success) {
        showModal('Successful Login! ' + data.msg);
      } else {
        showModal('Login failed: ' + data.msg);
      }
    })
    .catch(function (error) {
      showModal(error.msg);
    });
});

function showModal(message) {
  modalTitle.innerHTML = message;
  modalText.innerHTML = '';
  modal.style.display = 'block';
}

var exitButton = document.getElementById('exit');
exitButton.addEventListener('click', function () {
  var modal = document.getElementById('myModal');
  modal.style.display = 'none';
});
