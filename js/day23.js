function checkFirstName() {
    var firstName = $('#firstName').val();
    var reg = /^[a-zA-Z -.]{2,10}$/;
    if(reg.test(firstName)){
        $('#firstNameError').text(' ');
    } else {
        $('#firstNameError').text('First name should be 2 to 10 character')
    }
}
$('#firstName').keyup(function () {
    checkFirstName();
});


function checkLastName() {
    var lastName = $('#lastName').val();
    var reg = /^[a-zA-Z -.]{2,10}$/;
    if(reg.test(lastName)){
        $('#lastNameError').text(' ');
    } else {
        $('#lastNameError').text('Last name should be 2 to 10 character')
    }
}
$('#lastName').keyup(function () {
    checkLastName();
});

function checkEmailAddress() {
    var emailAddress = $('#emailAddress').val();
    var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
    if(reg.test(emailAddress)){
        $('#emailAddressError').text(' ');
    } else {
        $('#emailAddressError').text('Email address is invalid')
    }
}
$('#emailAddress').keyup(function () {
    checkEmailAddress();
});

function checkPassword() {
    var password = $('#password').val();
    var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if(reg.test(password)){
        $('#passwordError').text(' ');
    } else {
        $('#passwordError').text('Password must have 1 lowercase & uppercase letter, 1 number & one special character like !,#,%,*,&');
    }
}
$('#password').blur(function () {
    checkPassword();
});

$('#password').keyup(function () {
    $('#passwordError').text(' ');
});


$('#password').click(function () {
    $('#passwordError').text('Password must have 1 lowercase & uppercase letter, 1 number & one special character like !,#,%,*,&');
});

function checkConfirmPassword() {
    var confirmPassword = $('#confirmPassword').val();
    var password = $('#password').val();

    if(password == confirmPassword){
        $('#confirmPasswordError').text(' ');
    } else {
        $('#confirmPasswordError').text('Password & confirm password should be same')
    }
}
$('#confirmPassword').blur(function () {
    checkConfirmPassword()
});

$('#confirmPassword').keyup(function () {
    $('#checkConfirmPassword').text(' ');
});
$('#confirmPassword').click(function () {
    $('#checkConfirmPassword').text('Password dose not match');
});







$(window).scroll(function () {
    var menuPosition = $('#menu').position();
    var windowScrollPosition = $ (window).scrollTop();
    if(windowScrollPosition >= menuPosition.top){
        $('#mainUl').css({
            'position' : 'fixed',
            'top'   :   '0px',
            'width' :   '90%'
        });
    }else {
        $('#mainUl').css({
            'position'  :   'relative',
            'top'   :   '0px'
        });
    }
});

