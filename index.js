window.onload = function() {
    document.getElementById("formContact").addEventListener('submit', function(event) {
        event.preventDefault()
    })
};

// boolean variables

var inputA
var inputB
var inputC

// verifying form

function fullNameInput(){
    var alpha = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
    var name = document.getElementById('fullName').value;
    for (var i = [0]; i < name.length; i ++) {
        if (!alpha.includes(name[i].toLowerCase())) {
            document.getElementById('fullName').style.border = '3px solid red';
            document.getElementById('errorName').classList.remove('pName');
        }
    }

    if (name.length <= 3) {
        document.getElementById('fullName').style.border = "3px solid red";
        document.getElementById('errorName').classList.remove("pName");
        inputA = false

    } else {
        document.getElementById('fullName').style.border = "3px solid green";
        inputA = true
    }
};

function eMail(){
    var email = document.getElementById('email').value;
    var validateEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if(!validateEmail.test(email)) {
        document.getElementById('email').style.border = '3px solid red';
        document.getElementById('errorMail').classList.remove('pMail');
        inputB = false
    }
    else {
        document.getElementById('email').style.border = '3px solid green';
        inputB = true
    }
};

function messageInput() {
    var messageExt = document.getElementById('msg').value;
    if (messageExt.length >= 3) {
        document.getElementById('msg').style.border = "3px solid green";
        inputC = true

    } else {
        document.getElementById('msg').style.border = "3px solid red";
        document.getElementById('errorMsg').classList.remove("pMsg");
        inputC = false
    }
};

//  Focus

// Full Name
function verifyFullName(){
    document.getElementById('fullName').style.border = '3px solid blue'
    document.getElementById('errorName').classList.add('pName')
};

// Email
function verifyMail(){
    document.getElementById('email').style.border = '3px solid blue'
    document.getElementById('errorMail').classList.add('pMail')
};

// Message
function verifyMsg(){
    document.getElementById('msg').style.border = '3px solid blue'
    document.getElementById('errorMsg').classList.add('pMsg')
};

// variables input

var fullNamePrint = document.getElementById('fullName')
var emailPrint = document.getElementById('email');
var msgPrint = document.getElementById('msg')

// window.alert()

function confirmSubmit() {
    alert(
            "Your name is: " + fullNamePrint.value +
            "\nYour email is: " + emailPrint.value +
            "\nYour message is: " + msgPrint.value
        )
};

function confirm() {
    if (inputA === true && inputB === true && inputC === true) {
        confirmSubmit()
    }
    else {
        alert('Please, enter valid values')
    }
};

// HandleOnSubmit
function handleOnSubmit() {
    confirm();
};