function validateEmail (){
    var emailField = document.getElementById('user-email');
    var validEmail =  /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if(validEmail.test(emailField.value)){
        alert('Email is validEmail, continue with form submission');
        return true;
    }else{
        alert('Email is invalid, skip form submission');
        return false;
    }
}