// Sign up JS validation

$(document).ready(function () {
  $("#signupForm").on("submit", function (e) {
    e.preventDefault();

    // Get input values
    const yourName = $("#yourName").val();
    const email = $("#email").val();
    const phone = $("#phone").val();
    const password = $("#password").val();

    // Regex patterns
    const yourNameRegex = /^[a-zA-Z\s]{2,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^077[0-9]{7}$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,18}$/;

    let isValid = true;

    // Validate Name to be not empty

    if (!yourNameRegex.test(yourName)) {
      $("#name-error").text("Please Enter Your Name. eg:  Ali Ahmad .");
      isValid = false;
    } else {
      $("#name-error").text("");
    }

    // Validate email
    if (!emailRegex.test(email)) {
      $("#email-error").text("Invalid email format. Use username@domain.com.");
      isValid = false;
    } else {
      $("#email-error").text("");
    }

    // Validate phone
    if (!phoneRegex.test(phone)) {
      $("#phone-error").text(
        "Invalid phone number. It must start with '077' and contain 10 digits."
      );
      isValid = false;
    } else {
      $("#phone-error").text("");
    }

    // Validate password
    if (!passwordRegex.test(password)) {
      $("#password-error").text(
        "Password must be 8-18 characters, include 1 uppercase, 1 number, and 1 special character."
      );
      isValid = false;
    } else {
      $("#password-error").text("");
    }

    // If all validations pass
    if (isValid) {
      // Store data in local storage
      localStorage.setItem("yourName", yourName);
      localStorage.setItem("email", email);
      localStorage.setItem("phone", phone);
      localStorage.setItem("password", password);

      // Redirect to display data
      window.location.href = "login.html";
    }
  });
});

// My pwd icon JS code to hide and show password .......................

$(document).ready(function () {
  $("#eyeIcon").on("click", function () {
    const passwordField = $("#password");
    const eyeIcon = $("#eyeIcon");
    const eyeText = $("#eyeText");

    // Toggle the type attribute
    if (passwordField.attr("type") === "password") {
      passwordField.attr("type", "text");
      eyeIcon.text("visibility_off"); // Change icon to indicate hiding
    } else {
      passwordField.attr("type", "password");
      eyeIcon.text("visibility"); // Change icon to indicate showing
      eyeText.text(""); // Remove the "Off" text
    }
  });
});

//..........................................................

// sgin in  redircet to login page

function SignINBtn() {
  window.location.href = "login.html";
}

// Disabe SignUp button JS  starts here .....................

$(document).ready(function () {
  // Function to validate the form
  function validateForm() {
    // Get input values
    const yourName = $("#yourName").val();
    const email = $("#email").val();
    const phone = $("#phone").val();
    const password = $("#password").val();

    // Regex patterns
    const yourNameRegex = /^[a-zA-Z\s]{2,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^077[0-9]{7}$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,18}$/;

    // Check if all fields are valid
    const isNameValid = yourNameRegex.test(yourName);
    const isEmailValid = emailRegex.test(email);
    const isPhoneValid = phoneRegex.test(phone);
    const isPasswordValid = passwordRegex.test(password);

    // Enable or disable the button
    const isFormValid =
      isNameValid && isEmailValid && isPhoneValid && isPasswordValid;
    $("#signUpButton").prop("disabled", !isFormValid);
  }

  // Attach keyup and change events to inputs
  $("#yourName, #email, #phone, #password").on("keyup change", function () {
    validateForm();
  });

  // Handle form submission
  $("#SignupForm").on("submit", function (e) {
    e.preventDefault();

    // Perform the final validation check
    if ($("#signUpButton").prop("disabled")) {
      return; // Do nothing if the button is disabled
    }

    // Store data in local storage
    const yourName = $("#yourName").val();
    const email = $("#email").val();
    const phone = $("#phone").val();
    const password = $("#password").val();

    localStorage.setItem("yourName", yourName);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("password", password);

    // Redirect to display data
    window.location.href = "login.html";
  });
});

// disapled SignUp button ends here .............
