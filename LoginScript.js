$(document).ready(function () {
  $("#LoginForm").on("submit", function (e) {
    e.preventDefault();

    // Get input values from the form
    const email = $("#email").val();
    const password = $("#password").val();

    // Regex patterns for validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,18}$/;

    let isValid = true;

    // Validate email
    if (!emailRegex.test(email)) {
      $("#email-error").text("Invalid email format. Use username@domain.com.");
      isValid = false;
    } else {
      $("#email-error").text("");
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

    // If validations pass
    if (isValid) {
      // Retrieve stored data from local storage
      const storedEmail = localStorage.getItem("email");
      const storedPassword = localStorage.getItem("password");
      const storedName = localStorage.getItem("yourName");

      // Validate against stored data
      if (email === storedEmail && password === storedPassword) {
        // Generate a unique user ID (optional)
        const userId = Date.now();

        // Create a session for the user
        const sessionData = {
          id: userId,
          name: storedName,
          email: email,
          password: password,
        };
        sessionStorage.setItem("currentUser", JSON.stringify(sessionData));

        // Redirect to a protected page
        alert(`Welcome, ${storedName}! You are now logged in.`);
        window.location.href = "display.html";
      } else {
        // Show an error message for invalid credentials
        $("#login-error").text("Invalid email or password. Please try again.");
      }
    }
  });
});
