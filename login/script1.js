// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signInUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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



//submit button
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault()
  //inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("Creatinfg Account...")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessge)
      // ..
    });

})
