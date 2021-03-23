const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const phoneNo = document.getElementById('phoneNo');
const officeNo = document.getElementById('officeNo');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confPassword = document.getElementById('confPassword');
const biking = document.getElementById('checkbox_sample18');
const reading = document.getElementById('checkbox_sample19');
const playing = document.getElementById('checkbox_sample20');
const txtArea = document.getElementById('txtArea');
const month = document.getElementById('month');
const day = document.getElementById('day');
const submit = document.getElementById('submit');
const year = document.getElementById('year');
const setAge = document.getElementById('age');
const datePick = document.querySelector('.dob_fileds');

let gender;


//Event Listener

submit.addEventListener('click' , (e) => {
    e.preventDefault();
    validateForm();

});
var correct = /^[A-Za-z]+$/;

// First Name validation
let isFirstNameValid;
firstName.addEventListener('input', (e) => {
    isFirstNameValid = validateFirstName();
});
function validateFirstName() {
    if (firstName.value == '') {
        setError('FirstName cannot be blank!','#firstmsg');
        return false;
    }
    else if (firstName.value.trim().length < 3 || firstName.value.length > 15) {
        setError('FirstName Length should be 3 to 15 only','#firstmsg');
        return false;
    }
    else if (!correct.test(firstName.value.trim())) {
        setError('Firstname cannot be number!','#firstmsg');
        return false;
    }
    else {
        setSuccess('','#firstmsg');
        return true;
    }
}

//Last Name validation
let isLastNameValid;
lastName.addEventListener('input', (e) => {
    isLastNameValid = validateLastName();
});

function validateLastName() {
    if (lastName.value == '') {
        setError('LastName cannot be blank!','#lastmsg');
        return false;
    }
    else if (lastName.value.trim().length < 3 || lastName.value.length > 15) {
        setError('LastName Length should be 3 to 15 only','#lastmsg');
        return false;
    }
    else if (!correct.test(lastName.value)) {
        setError('Lastname cannot be number!','#lastmsg');
        return false;
    }
    else {
        setSuccess('','#lastmsg');
        return true;
    }
}

//Phone No. validation
let isPhoneNoValid;
phoneNo.addEventListener('input', (e) => {
     isPhoneNoValid = validatePhoneNo();
});

function validatePhoneNo() {
    
    if (phoneNo.value.trim() == '') {
        setError('Phone No. cannot be blank!','#phonemsg');
        return false;
    }
    else if (isNaN(phoneNo.value)) {
        setError('Phone No. can only be Numbers!','#phonemsg');
        return false;
    }
    else if (phoneNo.value.length != 10) {
        setError('Phone no. should be of 10 Digits','#phonemsg');
        return false;
    }
    else {
        setSuccess('','#phonemsg');
        return true;
    }
}

// Office No. validation
let isOfficeNoValid;
officeNo.addEventListener('input', (e) => {
    isOfficeNoValid = validateOfficeNo();
})

function validateOfficeNo() {
    
    if (isNaN(officeNo.value)) {
        setError('Office no. should be numbers only!','#officemsg');
        return false;
    }
    else if (officeNo.value.length != 10) {
        setError('Office no. should be of 10 Digits','#officemsg');
        return false;
    }
    else {
        setSuccess('','#officemsg');
        return true;
    }
}

//Email validation
let isEmailValid;
email.addEventListener('input', (e) => {
    isEmailValid = validateEmailId();
});

function validateEmailId() {
    
    if (email.value.trim() === '') {
        setError('Enter E-mail','#emailmsg');
        return false;
    }
    else if (!checkEmail(email.value)) {
        setError('Please Enter a Valid E-mail!!','#emailmsg');
        return false;
    }
    else {
        setSuccess('Valid E-mail','#emailmsg')
    }
}

// Validate Password------
let isPassValid;
password.addEventListener('input', (e) => {
    isPassValid = validatePassword();
});

function validatePassword() {
       
    if (password.value.trim() === '') {
        setError('Password Should not be blank!','#passmsg');
        return false;
    }
    else if (password.value.length < 5 || password.value.length > 15) {
        setError('Password Should be between 5 to 15 characters','#passmsg');
        return false;
    }
    else if (!checkPassword(password.value)) {
        setError('Invalid Password','#passmsg');
        return false;
    }
    else {
        setSuccess('Valid Password','#passmsg');
    }
}

// Validate Confirm Password----
let isConfPassValid;
confPassword.addEventListener('input', (e) => {
    isConfPassValid = validateConfPassword();
});

function validateConfPassword() {
   
    if (password.value.trim() == ''){
        setError('Enter Password','#passmsg');
        setError('Enter Password First','#confpassmsg')
        return false;
    }
    else if (confPassword.value.trim() == '') {
        setError('Confirm Password','#confpassmsg');
        return false;
    }
    else if (confPassword.value != password.value) {
        setError('Password Does not Match','#confpassmsg');
        return false;
    }
    else {
        setSuccess('Valid Password','#confpassmsg');
        return true;
    }
}


// const genderMale = document.getElementById('residence1');
// const genderFemale = document.getElementById('residence2');
// let isGenderSelected;
// genderMale.addEventListener('input', (e) => {
//     isGenderSelected = checkGenderSelected();
// });

// genderFemale.addEventListener('input', (e) => {
//     isGenderSelected = checkGenderSelected();
// });


// function checkGenderSelected() {
//     if (genderMale.checked) {
//         gender = genderMale.value;
//         return true;
//     }
//     else if (genderFemale.checked) {
//         gender = genderFemale.value;
//         return true;
//     }
//     else {
//         setError('Please Select Gender','#gendermsg');
//         return false;
//     }
// }


// Validate About You Part--------
let isAboutYouValid;
txtArea.addEventListener('input', (e) => {
    isAboutYouValid = validateTextArea();
});

function validateTextArea() {
    aboutYouVal = txtArea.value.trim();
    if (aboutYouVal === '') {
        setError('About You Field cannot be Empty','#abtyoumsg');
        return false;
    }
    else if ((aboutYouVal.split(' ').length) < 5) {

        //console.log(aboutYouVal.split(' ').length);
        setError('Write atleast 5 words in About You Field','#abtyoumsg');
        return false;
    } 
    else {
        document.querySelector('#abtyoumsg').innerHTML = '';
        return true;
    }
}


// Set Error-------
function setError(message,input) {
    
    document.querySelector(input).innerHTML = message;
    document.querySelector(input).style.color = 'red';
    
} 

// Set Success---------
function setSuccess(message,input) {
    document.querySelector(input).innerHTML = "";
}




//validation function
function validateForm() {


       // Select Gender-----
    const genderMale = document.getElementById('residence1');
    const genderFemale = document.getElementById('residence2');

    if (genderMale.checked == false && genderFemale.checked == false) {
        setAlert('Please Select Gender');
        return false;
    }

    // Select Intrests------

    if (biking.checked == false && reading.checked == false && playing.checked == false) {
        setAlert('Please Select atleast one Intrest');
        return false;
    }

    // Validate Text area------------

    aboutYouVal = txtArea.value.trim();
    if (aboutYouVal === '') {
        setAlert('About You Field cannot be Empty');
        return false;
    }
    else if ((aboutYouVal.split(' ').length) < 5) {

        //console.log(aboutYouVal.split(' ').length);
        setAlert('Write atleast 5 words in About You Field');
        return false;
    } 

    // Validate Date---------

    if (month.value === 'month') {
        setAlert('Please Select Month');
        return false;
    }
    if (day.value === 'day') {
        setAlert('Please Select Day');
        return false;
    }
    if (year.value === 'year') {
        setAlert('Please select year');
        return false;
    }

    let monthVal = month.value;
    let dayVal = parseInt(day.value);
    let yearVal = parseInt(year.value); 

    // Months With 30 days---------------

    if (monthVal === 'april' || monthVal == 'june' || monthVal == 'sep' || monthVal == 'nov') {
        if (dayVal > 30) {
            setAlert('Invalid Day');
            return false;
        }
    }

    if (monthVal === 'feb') {
        let leapYear = false;

        if ( ( !(yearVal % 4) && yearVal % 100) || !(yearVal % 400) ) {
            leapYear = true;
        }
        
        // if Year is not a Leap year then day should not be greater than 28-----

        if ((leapYear == false) && dayVal >= 29) {
            setAlert('Invalide date');
            return false;
        }

        // if Year is a Leap year then day should not be greater than 29-----

        if ((leapYear == true) && dayVal > 29) {
            setAlert('Invalide date');
            return false;
        }
    }

    // calculate Age--------

    let monthIndex = ['jan','feb','march','april','may','june','july','aug','sep','oct','nov','dec'];

    //console.log(monthIndex.indexOf(monthVal)+1);
    let crrDate = new Date();
    let birthDate = new Date(yearVal,monthIndex.indexOf(monthVal),dayVal);
    //console.log(crrDate);
    //console.log(birthDate);

    let diffInMS = crrDate.valueOf() - birthDate.valueOf();
    //console.log(diffInMS);

    // ( 1000 * 60 * 60 * 24 * 365.25 ) MilliSec Pre Year
    let age = Math.floor(diffInMS / ( 1000 * 60 * 60 * 24 * 365.25 ) );
    //console.log(age);

    // (1000 * 60 * 60 * 24) MilliSec Per Day---
    let days = Math.floor((diffInMS % ( 1000 * 60 * 60 * 24 * 365.25 )) / (1000 * 60 * 60 * 24) ) ;

    //console.log(days);

    let months = Math.floor(days/30) / 100;

    //console.log(months);
    //ageValue = `${age}.${months}`;

    ageValue = age + months;
    //console.log(ageValue);
    
    setAge.value = ageValue;
    //console.log(setAge.value);

    // let displayAge = parseFloat(setAge.value);
    // console.log(displayAge);
    return true;
}

// Contact Number Validity-------
function contactNoVal(contactNo) {
    const phoneRegx = /^[2-9]{2}[0-9]{8}$/;
    return phoneRegx.test(contactNo);
    // return contactNo.match(/^[2-9]{2}[0-9]{8}$/);
}

// Check E-mail Validity-------
function checkEmail(email) {
    const regx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regx.test(email);
}


function checkPassword(password) {
    const passRegx = /^(?=.*\d)(?=.*[a-z]).{4,14}$/;
    return passRegx.test(password);  
}


