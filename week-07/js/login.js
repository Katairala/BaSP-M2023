var passwordInput = document.getElementById('password');
var emailInput = document.getElementById('email');
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var submitButton = document.getElementById('submit');

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
      'One of the fields is not valid.';
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

  if (isEmailValid && isPasswordValid) {
    var formData = new FormData();
    formData.append('email', emailInput.value);
    formData.append('password', passwordInput.value);

    fetch('url_del_endpoint', {
      method: 'POST',
      body: formData
    })
      .then(function (response) {
        if (response.ok) {
          alert('Datos enviados correctamente');
        } else {
          throw new Error('Error al enviar los datos');
        }
      })
      .catch(function (error) {
        alert(error.message);
      });
  } else {
    alert('One or more of the fields are not valid.');
  }
});

