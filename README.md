# Random-Password-Generator

## Site Picture
![Password Generator](https://media.licdn.com/dms/image/C4D22AQG1c8Pvw7G7sw/feedshare-shrink_800/0?e=1578528000&v=beta&t=-HOiWBNN67GCtaDmcXlrqb1gY7NTT43u5jXxWq__rfE)

## Summary 
In this website you can generate random passwords with the characters the user has selected.



## Technologies Used
- HTML - used to create elements on the DOM
- CSS - styles html elements on page
- Bootstrap - Used to create cosmitics of the website and Media inquries
- Javascript - Used to create random numbers and letters
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages



## Code Snippet
```html
<html>
<body>
    <script>
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
    </script>
</body>
</html>
```
## Why this code is important
- I choose this code because its the most important part of the program since it runs a loop until you get the password you have selected with the random characters you choose. It took a while to set this up but with time and pattience it finally worked.
## Author Links
[LinkedIn](linkedin.com/in/andres-felipe-jimenez-ferreira-b67a35192)
[GitHub](https://github.com/AndresF97)