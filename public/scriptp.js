alert("javacript file has loaded");
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-storage.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Firestore initialization
const db = getFirestore();
const storage = getStorage();
const auth = getAuth();

document.addEventListener("DOMContentLoaded", () => {
  // Get references to the necessary DOM elements
  const addItemBtn = document.getElementById("addItemBtn"); // The "Add More Items" button
  const foodItemContainer = document.querySelector(".form-group .food-item").parentElement; // Container for adding new items

  // Add event listener to the "Add More Items" button
  addItemBtn.addEventListener("click", function () {
    // Create a new div to hold the food item and quantity input fields
    const newFoodItemDiv = document.createElement("div");
    newFoodItemDiv.classList.add("food-item"); // Add a class for styling consistency

    // Create a new input for the food item name
    const foodItemInput = document.createElement("input");
    foodItemInput.type = "text";
    foodItemInput.name = "foodItems"; // Same name attribute as existing inputs
    foodItemInput.placeholder = `Food item ${document.querySelectorAll('.food-item').length + 1} (e.g., Bread)`; // Dynamic placeholder
    foodItemInput.required = true; // Make it a required field

    // Create a new input for the quantity
    const quantityInput = document.createElement("input");
    quantityInput.type = "text";
    quantityInput.name = "quantity"; // Same name attribute as existing inputs
    quantityInput.placeholder = `Quantity (e.g., 2 bowls)`; // Dynamic placeholder
    quantityInput.required = true; // Make it a required field

    // Append the new inputs to the new div
    newFoodItemDiv.appendChild(foodItemInput);
    newFoodItemDiv.appendChild(quantityInput);

    // Append the new div to the form
    foodItemContainer.insertBefore(newFoodItemDiv, addItemBtn); // Add before the "Add More Items" button
  });

  // Remove item button functionality
  const removeItemBtn = document.getElementById("removeItemBtn");

  removeItemBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form validation when clicking the button

    const foodItems = document.querySelectorAll(".food-item");

    // Ensure at least one input group remains
    if (foodItems.length > 1) {
      const lastFoodItem = foodItems[foodItems.length - 1];
      lastFoodItem.remove();
    } else {
      alert("At least one food item must remain in the form.");
    }
  });

  // Submit button functionality
  const donationForm = document.getElementById("donationForm");

  donationForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
      const mobileNo = document.getElementById("mobileNo").value;
      const foodItems = [];
      const quantities = [];
      const foodItemElements = document.querySelectorAll(".food-item");

      foodItemElements.forEach((item) => {
        const foodName = item.querySelector("input[name='foodItems']").value;
        const quantity = item.querySelector("input[name='quantity']").value;
        foodItems.push(foodName);
        quantities.push(quantity);
      });

      const bestTillDate = document.getElementById("bestTillDate").value;
      const bestTillTime = document.getElementById("bestTillTime").value;
      const bestTill = `${bestTillDate} ${bestTillTime}`;

      // Fetch the currently logged-in user's details
      const currentUser = auth.currentUser;

      if (!currentUser) {
        alert("You must be logged in to post a donation.");
        return;
      }

      const donationData = {
        donorEmail: currentUser.email, // Current user's email
        donorId: currentUser.uid,     // Current user's UID
        mobileNo,
        foodItems,
        quantity: quantities,
        bestTill,
        pickupTill: null,
        status: "pending",
      };

      const docRef = await addDoc(collection(db, "donations"), donationData);
      console.log("Donation added with ID: ", docRef.id);
      alert("Donation successfully submitted!");
    } catch (error) {
      console.error("Error adding donation: ", error);
      alert("Failed to submit donation. Please try again later.");
    }
  });
});
