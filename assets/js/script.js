// Declare globals for symbol set arrays.
const lowerSet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upperSet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numSet = ['0','1','2','3','4','5','6','7','8','9'];
const symbSet = [' ','!','\"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':','<','=','>','?','@','[','\\',']','^','_','{','|','}','~']

function passGen() {
    let getSet = [];

    // Build the character set array by concatenating the selected sets:
    if (document.getElementById("lower").checked) {
        getSet = getSet.concat(lowerSet);
    }
    if (document.getElementById("upper").checked) {
        getSet = getSet.concat(upperSet);
    }
    if (document.getElementById("numbers").checked) {
        getSet = getSet.concat(numSet);
    }
    if (document.getElementById("symbols").checked) {
        getSet = getSet.concat(symbSet);
    }

    // Set the desired password length from the input box:
    var passLength = document.getElementById("length").value;

    // Check for input requirements:
    if (getSet.length === 0) {
        alert("Please select at least one character set.")
    }
    else if (passLength === "" || !(passLength >= 8) || !(passLength <= 128)) {
        alert("Unexpected password length. Please input a number from 8 to 128."); 
    } else {
        let password = "";

        // Build the passwrord string by selecting and concatenating characters at random from getSet[].
        for (let i = 0; i < passLength; i++) {
            password += getSet[Math.floor(Math.random() * getSet.length)];
        }
        document.getElementById("pass").innerHTML = password;
        document.getElementById("outCard").classList.remove("hidden");
    }
}