function validateForm(event, state) {
    var hasBlankField = false;
    var isValidPassword = true;
    var pwIsMatch = true;
    if (state.hasOwnProperty("username") && state.username === "") {
        state.errorMsg.username = "Please provide username"
        hasBlankField = true;
    }
    if (state.hasOwnProperty("email") && state.email === "") {
        state.errorMsg.email = "Please provide email"
        hasBlankField = true;
    }
    if (state.hasOwnProperty("password") && state.password === "") {
        state.errorMsg.password = "Please provide password"
        hasBlankField = true;
    }
    else {
        // Password must satisfy several constraints
        var hasUpperCase = new RegExp("[A-Z]+")
        var hasLowerCase = new RegExp("[a-z]+")
        var hasNumber = new RegExp("[0-9]+")
        
        // 1) Minimum 8 characters
        if (state.password.length < 8) {
            document.getElementById("password").setCustomValidity('Password not long enough');
            state.errorMsg.password = "Password requires minimum 8 characters"
            isValidPassword = false 
        }
        // 2) Must contains uppercase and lowercase character
        else if (!hasUpperCase.test(state.password) || !hasLowerCase.test(state.password)) { 
            document.getElementById("password").setCustomValidity('Password should contain uppercase and lowercase character');
            state.errorMsg.password = "Password requires at least one uppercase or lowercase character"        
            isValidPassword = false 
        }
        // 3) Must contains number
        else if (!hasNumber.test(state.password)) {
            document.getElementById("password").setCustomValidity('Password must contain number');
            state.errorMsg.password = "Password must contains number"
            isValidPassword = false
        }
        else {
            document.getElementById("password").setCustomValidity('');
        }
    }
    if (state.hasOwnProperty("password") && state.hasOwnProperty("confirmPassword")) {
        if (state.password === state.confirmPassword) { 
            if (state.confirmPassword === "" || !isValidPassword) {
                hasBlankField = true;
                pwIsMatch = false;
                document.getElementById("confirmPassword").setCustomValidity('Invalid password');
            }
            else { document.getElementById("confirmPassword").setCustomValidity(''); }
        }
        else {
            document.getElementById("confirmPassword").setCustomValidity('Password not same');
            state.errorMsg.confirmPassword = "Must be the same with the above password";
            pwIsMatch = false;
        }
    }
    if (state.form === "signup") { 
        return { 
            blankField: hasBlankField, 
            passwordmatch: pwIsMatch, 
            validPassword: isValidPassword 
        } 
    }
    else { return { blankField: hasBlankField } }
}

export default validateForm;