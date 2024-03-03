

function validateForm() {
    var emailInput = document.getElementById('emailInput');
    var passwordInput = document.getElementById('passwordInput');

    // Regular expression for a simple email validation
     var emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
   
    // Check if email is valid
    if (!emailRegex.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Check if password is greater than 6 characters
    if (passwordInput.value.length < 6) {
        alert('Password must be at least 6 characters long.');
        return false;
    }

    // Form is valid, continue with submission
    
    alert("Login Successfull!")
    return true;
}