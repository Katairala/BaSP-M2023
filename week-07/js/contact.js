var form = document.querySelector('form');
var nameInput = document.getElementsByName('first-name');
var lastNameInput = document.getElementsByName('last-name');
var emailInput = document.getElementsByName('email');
var messageInput = document.getElementsByName('send-message');
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var submitButton = document.querySelector('button[type="submit"]');

submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  var firstName = nameInput[0].value;
  for (var i = 0; i < firstName.length; i++) {
    var charCode = firstName.charCodeAt(i);
    if (
      ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) ||
      firstName.length < 3
    ) {
      alert('Name must contain only letters and have at least 3 characters.');
      return;
    }
  }
  var lastName = lastNameInput[0].value;
  for (var i = 0; i < lastName.length; i++) {
    var charCode = lastName.charCodeAt(i);
    if (
      ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) ||
      lastName.length < 3
    ) {
      alert(
        'Last name must contain only letters and have at least 3 characters.'
      );
      return;
    }
  }
  if (!emailExpression.test(emailInput[0].value)) {
    alert('Invalid email');
    return;
  }
  var alphanumeric =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var message = messageInput[0].value;
  var alphanumericCount = 0;
  for (var i = 0; i < message.length; i++) {
    if (alphanumeric.indexOf(message[i]) !== -1) {
      alphanumericCount++;
    }
  }
  if (alphanumericCount < 3) {
    alert('Message must contain at least 3 alphanumeric characters');
    return;
  }
  alert(
    'Nombre: ' +
      nameInput[0].value +
      '\nApellido: ' +
      lastNameInput[0].value +
      '\nCorreo electrónico: ' +
      emailInput[0].value +
      '\nMensaje: ' +
      messageInput[0].value
  );
});
