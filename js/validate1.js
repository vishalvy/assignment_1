function seterror(id,error){
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}


function validateform(){

    var returnval = true;

    var firstname = document.forms['myform']['fname'].value;
    if(firstname.length < 3 || firstname.length > 15){
        seterror("fname","Firstname should be less than 15 and more than 3!");
        returnval = false;
    }




    return returnval;
    // var lastname = document.getElementById("lname");
    // var submit = document.getElementById("submit");
    // var fphone = document.getElementById("fphone");
    // var fphone2 = document.getElementById("fphone2");
    // var femail = document.getElementById("femail");
    // var fpass = document.getElementById("fpass");
    // var fcpass = document.getElementById("fcpass")
    // var genderM = document.getElementById("residence1");
    // var genderF = document.getElementById("residence2");
    // var cbBike = document.getElementById("checkbox_sample18");
    // var cbread = document.getElementById("checkbox_sample19");
    // var cbplay = document.getElementById("checkbox_sample20");
    // var month = document.getElementById("month");
    // var day = document.getElementById("day");
    // var year = document.getElementById("year");
    // var aboutyou = document.getElementById("aboutyou");
}