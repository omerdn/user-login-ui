// getting form fields from index.html
let passfull = document.getElementById("passfull");
let userfull = document.getElementById("userfull");
let passrequestfull = document.getElementById("passRequest");

// local variables function for change with each keyup situation
function assignValues() {
  passCheck = passfull.value;
  userCheck = userfull.value;
  passCheckNumstr = new RegExp(passCheck);
  numstrCheck =
    !/([iışğüçö])/g.test(passCheckNumstr) &&
    /([0-9])/g.test(passCheckNumstr) &&
    /([A-z])/g.test(passCheckNumstr) &&
    24 >= passCheck.length &&
    passCheck.length >= 6;
  userLengthCheck = 20 >= userCheck.length && userCheck.length >= 6;
};

function emailValidationCheck() {
  passRequest = passrequestfull.value;
  emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g.test(passRequest);
};

// resetting fields back after submit password request...
function resetValues() { 
  passfull.value = "";
  userfull.value = "";
  passrequestfull.value = "";
  passCheckNumstr = "";
  numstrCheck = "";
  userLengthCheck = "";
  $("#passReq_image").attr("src", "");
  $("#passRequest").css("background-color", "white");
  $(".passRequest").addClass("button_unusable");
  $("#username_image").attr("src", "");
  $("#username_image_down").attr("src", "img/deny.png");
  $("#userfull").css("background-color", "#fff");
  $("#password_image").attr("src", "");
  $("#password_image_down").attr("src", "img/deny.png");
  $("#passfull").css("background-color", "#fff");
  $(".submitbutton").addClass("button_unusable");
}


// submit button validation check
$("#passfull, #userfull").keyup(function () {
  assignValues(); // username and password field variables
  // Checking does the submit button & fields meet the conditions
  if (userLengthCheck && numstrCheck) {
    $(".submitbutton").removeClass("button_unusable");
  } else {
    $(".submitbutton").addClass("button_unusable");
  }
});

// username field
$("#userfull").keyup(function () {
  if (userLengthCheck) {
    // if the USERNAME field suitable for conditions
    $("#username_image").attr("src", "img/green.png");
    $("#username_image_down").attr("src", "img/green.png");
    $("#userfull").css("background-color", "#fff");
  } else {
    // if the USERNAME field isn't suitable for conditions
    $("#username_image").attr("src", "img/deny.png");
    $("#username_image_down").attr("src", "img/deny.png");
    $("#userfull").css("background-color", "#ff00004a");
  }
});

// password field
$("#passfull").keyup(function () {
  if (numstrCheck) {
    // if the PASSWORD field suitable for conditions
    $("#password_image").attr("src", "img/green.png");
    $("#password_image_down").attr("src", "img/green.png");
    $("#passfull").css("background-color", "#fff");
  } else {
    // if the PASSWORD field isn't suitable for conditions
    $("#password_image").attr("src", "img/deny.png");
    $("#password_image_down").attr("src", "img/deny.png");
    $("#passfull").css("background-color", "#ff00004a");
  }
});

// submit button function
$(".submitbutton").click(function () {
  $("#passfull").css("background-color", "rgb(210 255 192)");
  $("#userfull").css("background-color", "rgb(210 255 192)");
  setTimeout(() => alert("Logging in..."), 50); // setTimeout, avoid alert executes before function.
});

// password request field
$("#passRequest").keyup(function () {
  emailValidationCheck(); // e-mail field variables
  if (emailCheck) {
    // if the PASSWORD REQUEST suitable for conditions
    $("#passReq_image").attr("src", "img/green.png");
    $("#passRequest").css("background-color", "#fff");
    $(".passRequest").removeClass("button_unusable");
  } else {
    // if the PASSWORD REQUEST isn't suitable for conditions
    $("#passReq_image").attr("src", "img/deny.png");
    $("#passRequest").css("background-color", "#ff00004a");
    $(".passRequest").addClass("button_unusable");
  }
});

// forgot passowrd? button function
$(".forgotpass").click(function () {
  $(".content").hide();
  $(".forgotPassword_area").show();
});

$(".backlogin").click(function () {
  $(".content").show();
  $(".forgotPassword_area").hide();
});

$(".passRequest").click(function () {
  resetValues();
  $(".content").show();
  $(".forgotPassword_area").hide();
  setTimeout(() => alert("Password request has been send..."), 50); // setTimeout, avoid alert executes before function.
  return;
});
