// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj-mzZcOmy2XCRIw8KgRjpShq0xkVQeug",
  authDomain: "food-wastage-reduction-tracker.firebaseapp.com",
  projectId: "food-wastage-reduction-tracker",
  storageBucket: "food-wastage-reduction-tracker.firebasestorage.app",
  messagingSenderId: "336442254850",
  appId: "1:336442254850:web:e472eabb07936cb07869b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Submit button
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault();
  
  // Get input values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Use the correct function for signing in with email and password
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("Login Successful! Welcome " + user.email);
      
      // Optionally, you can redirect to another page after successful login:
       window.location.href = "index.html";  // For example
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`);
      console.error("Error code:", errorCode, "Message:", errorMessage);
    });
});
