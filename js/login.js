
var x = "#login";
var y = "#register";
var z = "#btn";

function register() {
    $(x).css("left", "-370px");
    $(y).css("left", "20px");
    $(z).css("left", "110px");
}

function login() {
    $(x).css("left", "20px");
    $(y).css("left", "420px");
    $(z).css("left", "0px");
}


$(function () {
 

    $(".submit-btn").on("click", function () {

        var username = $(".username").val();
        var password = $(".password").val();

        url = "https://owmakerspace.co.za/users/data.json";

        $.getJSON(url, function (result) {            
            console.log(result.users);

            for (i = 0; i < result.users.length; i++) {

                if (result.users[i].username === username) {

                    if (result.users[i].password === password) {
                        
                        if(result.users[i].account === "active") {
                            window.location.href = "../index.html";                                                                      
                            sessionStorage.setItem("username", username);

                        } else {
                             $(".message").css("background-color", "#7e0202");
                            $(".message").text("Your account has been susspenced! contact support");                          
                        }


                    } else {
                        $(".message").css("background-color", "#7e0202");
                        $(".message").text("Your email or password does not match");
                    }



                } else {
                   $(".message").css("background-color", "#7e0202");
                   $(".message").text("Your email or password does not match");
                } // checking for user



            }; //end of http request


        }); //end of click event 

    });

});