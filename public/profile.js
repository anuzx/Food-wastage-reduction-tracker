// Import Firebase libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj-mzZcOmy2XCRIw8KgRjpShq0xkVQeug",
  authDomain: "food-wastage-reduction-tracker.firebaseapp.com",
  projectId: "food-wastage-reduction-tracker",
  storageBucket: "food-wastage-reduction-tracker.appspot.com",
  messagingSenderId: "336442254850",
  appId: "1:336442254850:web:e472eabb07936cb07869b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// DOM elements
const userEmailElement = document.getElementById("userEmail");
const userTypeElement = document.getElementById("userType");
const userDonationsElement = document.getElementById("userDonations");
const userClaimsElement = document.getElementById("userClaims");
const logoutButton = document.getElementById("logoutButton");

// Function to fetch user profile
const fetchUserProfile = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, "users", userId)); // Assuming users are stored in "users" collection
    if (userDoc.exists()) {
      const userData = userDoc.data();
      userTypeElement.innerText = userData.UserType || "Individual"; // Default type is "Individual"
      userDonationsElement.innerText = userData.donations || 0; // Default donations is 0
      userClaimsElement.innerText = userData.claims || 0; // Default claims is 0
    } else {
      console.error("No such user in the database!");
      userTypeElement.innerText = "Individual";
    }
  } catch (error) {
    console.error("Error fetching user profile:", error);
  }
};

// Authentication listener
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    userEmailElement.innerText = user.email;

    fetchUserProfile(user.uid); // Fetch user profile from Firestore
  } else {
    // Redirect to login page if no user is logged in
    window.location.href = "index1.html";
  }
});

// Logout functionality
logoutButton.addEventListener("click", async () => {
  try {
    await signOut(auth);
    alert("You have been logged out.");
    window.location.href = "login.html"; // Redirect to login page
  } catch (error) {
    console.error("Error during logout:", error);
  }
});
