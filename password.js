
// variables that carry characters
var little=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var big=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var symbol=["!","@","$","%","^","&","*","(",")","[","]","{","}",";","<",">","/"]
var nums=[0,1,2,3,4,5,6,7,8,9]



//if statements to carry code
function generator(){

   //confirm the lenght of the password
      var answer=prompt("How many characters would you like your password to contain?")
      while(answer < 8 || answer > 128){
         answer=prompt("How many characters would you like your password to contain?")
      if(answer< 8){
         alert("your password lenght must be more than 8 characters long")
      }
      else if(answer>128){
         alert("your password lenght must be less than 128 characters")
      }
   }
   // //alerts to to make sure the user wants these strings and numbers 
      var length =confirm("Must include a lenght of 8 and 128 characters")
      var special=confirm("Must include special characters")
      var numeric= confirm("Must include numbers")
      var lower=confirm("Must include a lower case letter")
      var upper=confirm("Must include a Uppercase letter")
 
   //empty variable to carry password
      var inbox=document.getElementById('pass')
      var res=""
      var counter=0
   //gets the password characters by using a while loop
      while(counter < answer){
      
      if(special===true){
         res+=symbol[Math.floor(Math.random() * symbol.length)]
   }
      if(numeric===true){
         res+=nums[Math.floor(Math.random() * nums.length)]
   }
      if(lower===true){
       res+=little[Math.floor(Math.random() * little.length)]

   }
      if(upper===true){
       res+=big[Math.floor(Math.random() * big.length)]
   }
      counter+=1
}
   inbox.textContent=res
}
//event listener that makes the newpassword
document.getElementById("button_1").addEventListener("click",generator)