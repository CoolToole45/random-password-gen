// This function will generate a random password
function generatePass() {
    // This variable contains all the accepted characters that will be used for generating password.
    let charset = 
    '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // The length of the generated password.
    let passLength = 16;

    // Empty variable that will contain the generated password
    let randomPass = '';

    // A loop that will pick a random character from "charset" and will add it to the initially empty "randomPass" variable
    for(let i = 0; i < passLength; i++) {
        let pass = charset[Math.floor(Math.random() * 72)];
        randomPass += pass;
    }

    // Display the generated password on screen
    document.getElementById('pass-line').innerText = randomPass;
}