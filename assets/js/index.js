// export {}
// variables that carry characters
var littleLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var bigLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialSymbol = ["!", "@", "$", "%", "^", "&", "*", "(", ")", "[", "]", "{", "}", ";", "<", ">", "/"];
var numsArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var generatoPwBtn = document.getElementById("btnOne");
var copyClipBoard = document.getElementById("btnTwo");
//if statements to carry code
function generatePwd() {
    //confirm the lenght of the password
    var answer = prompt("How many characters would you like your password to contain?");
    while (+answer < 8 || +answer > 128) {
        answer = prompt("How many characters would you like your password to contain?");
        if (+answer < 8) {
            alert("your password lenght must be more than 8 characters long");
        }
        else if (+answer > 128) {
            alert("your password lenght must be less than 128 characters");
        }
    }
    // //alerts to to make sure the user wants these strings and numbers 
    var length = confirm("Your password will be at least be " + answer + " characters long.");
    var special = confirm("Must include special characters");
    var numeric = confirm("Must include numbers");
    var lower = confirm("Must include a lower case letter");
    var upper = confirm("Must include a Uppercase letter");
    //empty variable to carry password
    var inbox = document.getElementById('pass');
    var mainArrayContainer = [];
    var finalPwd = '';
    var counter = 0;
    //gets the password characters by using a while loop
    if (special) {
        mainArrayContainer.push.apply(mainArrayContainer, specialSymbol);
    }
    if (numeric) {
        mainArrayContainer.push.apply(mainArrayContainer, numsArr);
    }
    if (lower) {
        mainArrayContainer.push.apply(mainArrayContainer, littleLetter);
    }
    if (upper) {
        mainArrayContainer.push.apply(mainArrayContainer, bigLetter);
    }
    while (counter < answer) {
        finalPwd += mainArrayContainer[Math.floor(Math.random() * mainArrayContainer.length)];
        counter += 1;
    }
    inbox.textContent = finalPwd;
}
//made afunction to copy texts
function copyToClipBoard() {
    var copy = document.getElementById("pass");
    copy.select();
    document.execCommand("copy");
    alert("Here's the text you copied" + copy.value);
}
//event listener that makes the newpassword
generatoPwBtn.addEventListener("click", generatePwd);
copyClipBoard.addEventListener("click", copyToClipBoard);
