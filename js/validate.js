var firstname = document.getElementById("fname");
var lastname = document.getElementById("lname");
var submit = document.getElementById("submit");
var fphone = document.getElementById("fphone");
var fphone2 = document.getElementById("fphone2");
var femail = document.getElementById("femail");
var fpass = document.getElementById("fpass");
var fcpass = document.getElementById("fcpass")
var genderM = document.getElementById("residence1");
var genderF = document.getElementById("residence2");
var cbBike = document.getElementById("checkbox_sample18");
var cbread = document.getElementById("checkbox_sample19");
var cbplay = document.getElementById("checkbox_sample20");
var month = document.getElementById("month");
var day = document.getElementById("day");
var year = document.getElementById("year");
var aboutyou = document.getElementById("aboutyou");
var dob = document.getElementById("dob");


//submit button
submit.addEventListener('click', function(e) {
    // prevent the form from submitting
    e.preventDefault();
    validateform();
});



//validate function
function validateform(){
    
    //insert values in variables
    var firstnameval = firstname.value.trim();
    var lastnameval = lastname.value.trim();
    var phone1 = fphone.value;
    var officeno = fphone2.value;
    var email = femail.value;
    var password = fpass.value;
    var confirmpass = fcpass.value;
    var monthval = month.value;
    var dayval = day.value;
    var yearval = year.value;
    var aboutyouval = aboutyou.value;
 

    
    //Regular expression
    var emailexp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var passexp = /^[a-zA-Z0-9]+$/;
    var correct = /^[A-Za-z]+$/;

    //validations checking

    //Firstname validation
    if(firstnameval == ""){
        setError(fname,"Firstname cannot be blank!");
    }
    else if(!correct.test(firstnameval)){
        setError(fname,"Firstname can be only Aphabets");
    }
    else if(firstnameval.length < 3 || firstnameval.length > 10){
        setError(fname,"Firstname should be more than 3 and less than 10");
    }
    else{
        setSuccess(fname);
    }
    

    //lastname validation
    if(lastnameval == ""){
        setError(lname,"Lastname cannot be blank!");
    }
    else if(!correct.test(lastnameval)){
        setError(lname,"Lastname can be only Aphabets");
    }   
    else if(lastnameval.length < 3 || lastnameval.length > 15){
        setError(lname,"Lastname should be more than 3 and less than 15!");
    }
    else{
        setSuccess(lname);
    }
    

    //phone validation
    if(phone1 == ""){
        setError(fphone,"Phone no. cannot be blank!")
    }
    else if(isNaN(phone1)){
        setError(fphone,"Phone no. should be numeric only!")
    }
    else if(phone1.length != 10){
        setError(fphone,"The Phone no. should be of 10 digits!")
    }
    else{
        setSuccess(fphone);
    }

    //office no. validation
    if(isNaN(officeno)){
        setError("Office no. should be numeric only!");
    }
    else{
        setSuccess(fphone2);
    }
    

    //Email validation
    if(email == ""){
        setError(femail,"Email Field cannot be Blank!");
    }    
    else if(!emailexp.test(email)){
        setError(femail,"Enter Valid Email address");
    }
    else{
        setSuccess(femail);
    }
    

    //password validation
    if(password == ""){
        setError(fpass,"Password cannot be blank!");
    }
    
    else if(password.length < 8 || password.length > 12){
        setError(fpass,"Password range should be between 8 to 12 charachers");
    }
    
    else if(!passexp.test(password)){
        setError(fpass,"Password should contain only Alphanumeric characters, No Special characters!");
    }
    else{
        setSuccess(fpass);
    }

    //confrim password validation
    if(confirmpass == ""){
        setError(fcpass,"Confirm the password!");
    }
    else if(confirmpass != password){
        setError(fcpass,"The password doesn't match!")
    }
    else{
        setSuccess(fcpass);
    }

    //Date of Birth and year validation
    if(yearval == "year" || monthval == "month" || dayval == "day"){
        setError(dob,"Select Date of Birth Properly!")
    }
    else{
        setSuccess(dob);
    }
    
    
    
    //Gender validation
    if(genderM.checked == false && genderF.checked == false){
        setError(genderF,"Select your Gender!");
    }
    else{
        setSuccess(genderF);
    }

    if(cbBike.checked == false && cbread.checked == false && cbplay.checked == false){
        setError(residence1,"Select atleast one Interest!")
    }
    else{
        setSuccess(residence1);
    }

    //About you text area validation
    if(aboutyouval == ""){
        setError(aboutyou,"Enter Something about you in few words!")
    }
    else{
        setSuccess(aboutyou);
    }
    

    if(yearval != "year" && monthval != "month" && dayval != "day"){
        var monthindex = ['jan',"feb","march","april","may","june","july","aug","sep","oct","nov","dec"];
        var currentdate = new Date();
        var dob = new Date(yearval,monthindex.indexOf(monthval),dayval);
        var month_diff = currentdate.valueOf() - dob.valueOf();
        var age = Math.floor(month_diff / 31536000000);
        var days = Math.floor(month_diff % 31536000000) / 86400000;
        var months = Math.floor(days/30) / 100;
        agevalue = age + months;

        // printage(agevalue);
        document.getElementById("age").value = agevalue;
    }


}


function setError(input,message){
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');
    small.innerText = message;
    validateform();
}
function setSuccess(input){
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');
    small.innerText = ""
}