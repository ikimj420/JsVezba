//Variables
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message'),
      resetBtn = document.getElementById('resetBtn'),
      sendEmailForm = document.getElementById('email-form');



//Event Listeners
eventListeners();
function eventListeners() {
    //App init
    document.addEventListener('DOMContentLoaded', appInit);
    //Validate form
    email.addEventListener('blur', validateFields);
    subject.addEventListener('blur', validateFields);
    message.addEventListener('blur', validateFields);
    //Send email and reset button
    sendEmailForm.addEventListener('submit', sendEmail);
    resetBtn.addEventListener('click', resetForm);
}



//Function
//App Initialization
function appInit() {
    //disable send button on load
    sendBtn.disabled = true;
}
//Validate the fields
function validateFields() {
    let errors;
    //Validate length of the fields
    validateLenght(this);
    //Validate email
    if (this.type === email){
        validateEmail(this);
    }
    //both will return errors, then check if there're any error
    errors = document.querySelectorAll('.error');
    //Check that the inputs are not empty
    if (email.value !== '' && subject.value !== '' && message.value !== '') {
        if (errors.length === 0) {
            //the button should be enabled
            sendBtn.disabled = false;
        }
    }
}
//Validate length of the fields
function validateLenght(field) {
    if (field.value.length > 0 ) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}
//Validate Email
function validateEmail(field) {
    let emailText = field.value;
    //check if the emailText contains the @ sign
    if (emailText.indexOf('@') !== -1) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}
//Reset the form
function resetForm() {
    sendEmailForm.reset();
}
//
function sendEmail(e) {
    e.preventDefault();
    //show the spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'block';
    //hide spinner then show send email img
    setInterval(function () {
        //hide the spinner
        spinner.style.display = 'none';
        //show the img
        document.querySelector('#loaders').appendChild(sendEmailImg);
        //after 3 sec, hide the img and reset form
        setInterval(function () {
            sendEmailForm.reset();
            sendEmailImg.remove();
        }, 3000)
    }, 3000);
    //show the img
    const sendEmailImg = document.createElement('img');
    sendEmailImg.src = 'img/mail.gif';
    sendEmailImg.style.display = 'block';
}