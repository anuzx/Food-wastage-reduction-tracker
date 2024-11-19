// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Select the form and input fields
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const forgetpassword = document.getElementById("forgotpasswordlink");
    const Signup = document.getElementById("signuplink");
  
    // Add an event listener to the form's submit event
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Get values from input fields
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      // Validate the inputs
      if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
      }
  
      // Simulate login success (replace with actual backend integration later)
      alert("Login successful!");
      console.log(`Email: ${email}, Password: ${password}`);
    });
    

  //function_For_forget_password_page_transition
  forgetpassword.addEventListener("click",(event)=>
{
   event.preventDefault();
   alert("Redirecting to forgot password page..");

});
 //function_for_signup_page_transition
Signup.addEventListener("click",(event)=>
    {
       event.preventDefault();
       alert("Redirecting to Signup page..");
    
    });
  
    // Utility function to validate email format using regex
    function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
      return emailPattern.test(email);
    }
  });
  