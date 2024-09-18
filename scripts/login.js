// Select form by id
const loginForm = document.querySelector("#login-form");
// Handle login submit event
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Collect form data
    const formData = new FormData(loginForm);
    console.log(
        formData.get("username"),
        formData.get("password")
    );
    // Save user information
    // Display success message
    const messageH1 = document.querySelector("#message");
    messageH1.textContent = "Login Successful!";
});
