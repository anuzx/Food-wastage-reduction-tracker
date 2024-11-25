
// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

import { getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

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

const auth = getAuth(app);

const db = getFirestore();


//submit button
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault()
  //inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;   
  const fullname = document.getElementById("name").value;
  const userType = document.getElementById("usertype").value;


if (!submit) {
  console.error("Submit button not found!!!");
}

  async function add_document_autoID() {
    console.log("function add document loaded!!")
    try {
      console.log("Attempting to add document ot firestore...")
      const ref = collection(db, "Users");
      await addDoc(ref, {
        Email: email,
        Fullname: fullname,
        UserType: userType,
      });
      console.log("document added to firestore successfully");
      alert("Data added successfully");
    } catch (error) {
      console.error("Error adding document to Firestore:", error);
      alert("Unsuccessful operation, error: " + error);
    }
  }
  
  
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creatinfg Account...")
    // ...
    console.log("Script loaded successfully");
    add_document_autoID();
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(`Error: ${errorMessage}`);
    console.error("Error code:", errorCode, "Message:", errorMessage);
    // ..
  });
  
})
