//confirm the lenght of the password
var confirm=prompt("How many characters would you like your password to contain?")
console.log(confirm)
while(confirm < 8 || confirm > 128){
   confirm=prompt("How many characters would you like your password to contain?")
   if(confirm < 8){
      alert("your password lenght must be more than 8 characters long")
   }
   else if(confirm>128){
      alert("your password lenght must be less than 128 characters")
   }
}

//alerts to to make sure the user wants these strings and numbers 
var res;
var lenght = alert("Must include a lenght of 8 and 128 characters")
var special=alert("Must include special characters")
var numeric= alert("Must include numbers")
var lower=alert("Must include a lower case letter")
var upper=alert("Must include a Uppercase letter")
// variables that carry characters
var little=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var big=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var symbol=["!","@","$","%","^","&","*","(",")","[","]","{","}",";","<",">","/"]
var nums=[0,1,2,3,4,5,6,7,8,9].toString()
//if statements to carry code
function generator(){
   while(confirm < confirm.lenght){
   if(special){
      res+=symbol[Math.floor(Math.random() * 17)]
}

   if(numeric){
      res+=nums[Math.floor(Math.random() * 10)]
}
   if(lower){
      res+=little[Math.floor(Math.random() * 27)]

}
   if(upper){
      res+=big[Math.random(Math.random() * 27)]
}
   return res 
}
}
// to send text into the html
