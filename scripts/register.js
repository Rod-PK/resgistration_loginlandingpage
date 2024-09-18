// Select form by id
const registerForm = document.querySelector("#register-form");
// Handle form submit event
registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Collect form data
    const formData = new FormData(registerForm);
    console.log(
        formData.get("username"),
        formData.get("email"),
        formData.get("password")
    );
    // Save user information
    // Send confirmation email
    // Display success message
    const messageH1 = document.querySelector("#message")
    messageH1.textContent = "Account registered successfully!"
});

// Age variable
const age = 44;
// Square of age
function squareOfAge(age) {
    const squaredAge = age ** 2;
    return squaredAge;
}

const squaredAge = squareOfAge(45)


// function to get full name

function fullName(firstname, lastname) {
    // return firstname + lastname;
    return `${firstname} ${lastname}`;
}

const myfullName = fullName("Rodney", "Hinson");


