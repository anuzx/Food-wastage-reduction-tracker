document.addEventListener("DOMContentLoaded",()=>{


const form = document.querySelector("form");
const ngocheckbox = document.getElementById("is-ngo");
const restaurantcheckbox = document.getElementById("is-restaurant");
const email = document.getElementById("email");
const password =document.getElementById("password");
const againpass = document.getElementById("confirm-password");

// now adding logic for what will happen when user will click on submit button
form.addEventListener("submit",(e)=>{
   // if the fields are blank 
   e.preventDefault();
   
   const emailforsignup = email.value.trim();
   const passowrdforsignup = password.value.trim();
   const renterpassword = againpass.value.trim();
   if(!validateEmail(emailforsignup)){
    alert("please enter a valid email address");
    return;
    
   }
   if(passowrdforsignup<6){
    alert("Password length should be 6");
    return;

   }
   if(passowrdforsignup != renterpassword){
    alert("confirm password does not matches");
    return;
   }
   
   // firebase code goes here
   if(ngocheckbox.checked){
    alert("everything uploaded successfully and you are a ngo");

   }
   else if(restaurantcheckbox.checked){
    alert("everything uploaded succesfully and you are restaurant");
   }
   else{
    alert("everything uploaded to database");
   }
   // creating alert on successful submission
   

   
});


// function for email vaildation
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
    return emailPattern.test(email);
  }

});
