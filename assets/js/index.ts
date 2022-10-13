
// variables that carry characters
var little=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var big=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var symbol=["!","@","$","%","^","&","*","(",")","[","]","{","}",";","<",">","/"]
var nums=[0,1,2,3,4,5,6,7,8,9]
const generatoPwdBtn = document.getElementById("button_1") as HTMLElement
const copyClipBoardBtn = document.getElementById("button_2") as HTMLElement


//if statements to carry code
function generator(){

   //confirm the lenght of the password
      let answer:number | any = prompt("How many characters would you like your password to contain?")
      while(+answer < 8 || +answer > 128){
         answer=prompt("How many characters would you like your password to contain?")
      if(+answer< 8){
         alert("your password lenght must be more than 8 characters long")
      }
      else if(+answer>128){
         alert("your password lenght must be less than 128 characters")
      }
   }
   // //alerts to to make sure the user wants these strings and numbers 
      var length =confirm("Your password will be at least be "+answer+" characters long.")
      var special=confirm("Must include special characters")
      var numeric= confirm("Must include numbers")
      var lower=confirm("Must include a lower case letter")
      var upper=confirm("Must include a Uppercase letter")
 
   //empty variable to carry password
      var inbox=document.getElementById('pass') as HTMLElement
      var res=""
      var counter=0
   //gets the password characters by using a while loop
      while(counter < answer){
      
      if(special===true){
         res+=symbol[Math.floor(Math.random() * symbol.length)]
   }
      else if(numeric===true){
         res+=nums[Math.floor(Math.random() * nums.length)]
   }
      if(lower===true){
       res+=little[Math.floor(Math.random() * little.length)]

   }
      else if(upper===true){
       res+=big[Math.floor(Math.random() * big.length)]
   }
      counter+=1
}

   inbox.textContent=res
}
//made afunction to copy texts
function copyfun(){
   var copy = document.getElementById("pass") as HTMLElement
   copy.select();
   document.execCommand("copy")
   alert("Here's the text you copied" + copy.value)

}
//event listener that makes the newpassword
generatoPwdBtn.addEventListener("click",generator)
copyClipBoardBtn.addEventListener("click",copyfun)