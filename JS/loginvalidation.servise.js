$(document).ready(function () {
    verifyUser()
    logOutUser()         //sop that the button works

    
});

function verifyUser() {
    if (sessionStorage.getItem('username')) {

    } else {
        window.location.href = '../pages/loginReg.html'
    }
}

function logOutUser() {
    $('#logout').click(function (e) { 
        e.preventDefault();
        sessionStorage.removeItem('username');
        verifyUser()
    });
}