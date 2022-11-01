import { pattern } from "./pattern.mjs";
const form = document.getElementById('form-field'),
firstName = document.getElementById('first-name'),
lastName = document.getElementById('last-name'),
email = document.getElementById('email'),
password = document.getElementById('password'),
phoneNumber = document.getElementById('telephone'),
bio = document.getElementById('bio');

form.addEventListener('submit', e => {
      e.preventDefault();

      if(!validateForm()) validateForm();
      else{
            firstName.value = '';
            lastName.value = '';
            email.value = '';
            password.value = '';
            phoneNumber.value = '';
            bio.value = '';
      }
      console.log(isValidName(lastName.value));
});

function isValidName(string){
      let pattern = /^[A-Z]+(\w){2,}/;

      return pattern.test(string)
}

const setError = (element, message) => {
      const inputControl = element.parentElement;
      const errorDisplay = inputControl.querySelector('.error');
  
      errorDisplay.innerText = message;
      inputControl.classList.add('error');
      inputControl.classList.remove('success');
}

const setSuccess = element => {
      const inputControl = element.parentElement;
      const errorDisplay = inputControl.querySelector('.error');
  
      errorDisplay.innerText = '';
      inputControl.classList.add('success');
      inputControl.classList.remove('error')
}

const isValidEmail = string => {
      let pattern = /^([a-z]+)+[^\$\-\_ ]+(\d+)+@[(gmail|yahoo)]+\.(\w)/

      return pattern.test(string);
}

const isValidPassword = string => {
      let pattern = /^[(\w{6,}@\-)]/;

      return pattern.test(string)
}

const isValidPhoneNumber = number => {
      let pattern = /^\(?([0-9]{3,})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;

      return pattern.test(number);
}



const isValidString = string => {
      let pattern = /^([a-z]+)-_, $/g;

      return pattern.test(string)
}

console.log(isValidString('hello, its me'));
console.log(isValidString('hello, i am Daniel'));
console.log(isValidString('hello, i am a softWareengineer'));

function validateForm(){

      if(!isValidName(firstName.value)) {
            setError(firstName, 'First name must be alphanumeric and contain 3 - 16 characters');
      }else{
            setSuccess(firstName)
      }

      if(!isValidName(lastName.value)){
            setError(lastName, 'Last name must be alphanumeric and contain 3 - 16 characters');
      }else{
            setSuccess(lastName)
      }

      if(!isValidEmail(email.value)){
            setError(email, 'Email must be a valid address e.g example#example.com');
      }else{
            setSuccess(email)
      }

      if(!isValidPassword(password.value) ||password.value.length < 6){
            setError(password, 'Password must be alphanumeric (@, _, - are also allowed) and between 6 and 20 characters');
      }
      else setSuccess(password);

      if(!isValidPhoneNumber(phoneNumber.value)){
            setError(phoneNumber, 'A valid telephone number (11 digits and 333-333-333)');
      }else{
            setSuccess(phoneNumber)
      }

      //if(!isValidString(bio.value))
}