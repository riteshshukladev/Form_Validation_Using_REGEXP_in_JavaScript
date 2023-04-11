
function validation(){
    var Username=document.getElementById("username").value;
    var Password=document.getElementById("password").value;
    var cpassword=document.getElementById("confirm_passWord").value;
    var Email=document.getElementById("email").value;
    var Phone=document.getElementById("Mob_no").value;


    var usercheck=/^[A-Za-z. ]{3,}[0-9]{1,}$/gm;
    var passcheck=/^(?=.*[0-9])(?=.*[!@#$%^&])[A-Za-z0-9@#$%^&]{2,}$/gm;
    var checkemail=/^[A-Za-z0-9_]{2,}@[A-Za-z]{2,}[.]{1}[A-Za-z.]{2,}/gm;
    var checkphone=/^[789]{1}[0-9]{9}$/gm;
// Username check
    if(usercheck.test(Username)){
        document.getElementById('username_error').innerHTML="";

    }
    else{
        document.getElementById('username_error').innerHTML="**Invalid Username";
        return false;
    }
    // Password check
    if(passcheck.test(Password)){
        document.getElementById('password_error').innerHTML="";

    }
    else{
        document.getElementById('password_error').innerHTML="**Invalid Password";
        return false;
    }
    // confirm password check
    if( cpassword.match(Password)){
        document.getElementById('c_password_error').innerHTML="";

    }
    else{
        document.getElementById('c_password_error').innerHTML="**Password not matched";
    }
    // Email check
    if(checkemail.test(Email)){
        document.getElementById('email_error').innerHTML="";

    }
    else{
        document.getElementById('email_error').innerHTML="**Invalid Email";
        return false;
    }
    // Phone check
    if(checkphone.test(Phone)){
        document.getElementById('mob_no_error').innerHTML="";

    }
    else{
        document.getElementById('mob_no_error').innerHTML="**Invalid Phone Number";
        return false;
    }
}


