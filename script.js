var firstName;
var lastName;
var emailAddress;
var password;


function SignUp(){

    firstName = document.getElementById("firstName");
    lastName = document.getElementById("lastName");
    emailAddress = document.getElementById("emailAddress");
    password = document.getElementById("pass");

    console.log(firstName);

    var user = {
        firstName: firstName.value,
        lastName: lastName.value,
        emailAddress: emailAddress.value,
        password: password.value

    }
    validation(user);    
}

function validation(objectToValidate){
    if(!isNaN(objectToValidate.firstName)){
        alert('Name is invalid');
    } else if(!isNaN(objectToValidate.lastName)){
        alert('Last Name is invalid');
    }else if(objectToValidate.emailAddress.indexOf('@')== -1  ){
        alert('email address is invalid');
    } else if(objectToValidate.password.length0){
        alert('pas is invalid');
    }

function saveInLocalStorage(objectToSave){
    var users = localStorage.getItem('users');
    console.log(user, 'user');
    users = JSON.parse(users);
    console.log('outside if', users);
    if(user == null){
        user[];
        console.log('inside if', users);
    }
    users.push(objectToSave);
    localStorage.setItem('users', JSON.stringify(users));
    console.log(localStorage.getItem('users'));
    }
}