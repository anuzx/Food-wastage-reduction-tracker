
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore, collection, getDocs, updateDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";


// Firestore and Auth initialization
const db = getFirestore();
const auth = getAuth();

// Function to Fetch Donations
async function fetchDonations() {
  const donationContainer = document.querySelector('.card-container');
  donationContainer.innerHTML = ''; // Clear existing cards

  try {
    // Fetch the donations from Firestore
    const donationsSnapshot = await getDocs(collection(db, 'donations'));
    const donations = donationsSnapshot.docs.filter(doc => doc.data().status === 'pending'); // Filter pending donations

    if (donations.length === 0) {
      donationContainer.innerHTML = `<p>No pending donations available right now.</p>`;
      return;
    }

    donations.forEach((doc) => {
      const data = doc.data();

      // Log data to verify the structure
      console.log("Fetched data:", data);

      const foodItems = data.foodItems ? data.foodItems.map(item => item.toUpperCase()).join(', ') : [];
      const quantities = data.quantity || [];
      const bestBefore = data.bestTill || 'N/A';
      const mobileNo = data.mobileNo || 'Not Provided';
      const donorEmail = data.donorEmail || 'Not Provided';
      const donationId = doc.id;

      if (!foodItems.length || !quantities.length) {
        console.error('Food items or quantities are missing in the data:', data);
        return; // Skip this donation if food items or quantities are missing
      }

      // Build the list of food items and their quantities
      let foodListHTML = '';
      data.foodItems.forEach((item, index) => {
        const quantity = quantities[index] || 'N/A'; // Default to 'N/A' if no quantity is found
        foodListHTML += `<p><strong>${item}:</strong> ${quantity}</p>`;
      });

      const cardHTML = `
        <div class="card">
          <h2><strong>${foodItems}</strong></h2> <!-- Food items in uppercase and bold -->
          ${foodListHTML} <!-- List of food items and quantities -->
          <p><strong>Best Before:</strong> ${bestBefore}</p>
          <p><strong>Distance:</strong> 5 km</p>
          <p><strong>Mobile:</strong> ${mobileNo}</p>
          <p><strong>Email:</strong> ${donorEmail}</p>
          <button class="claim-btn" data-donation-id="${donationId}">Claim</button>
        </div>
      `;
      donationContainer.innerHTML += cardHTML;
    });

    // Attach event listeners after the cards are added
    const claimButtons = document.querySelectorAll('.claim-btn');
    claimButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        const donationId = button.getAttribute('data-donation-id');
        claimDonation(donationId, button);
      });
    });

  } catch (error) {
    console.error('Error fetching donations:', error);
    donationContainer.innerHTML = `<p>Error loading donations.</p>`;
  }
}

// Function to Claim Donation
// Function to Claim Donation
async function claimDonation(donationId, button) {
  console.log('Claiming donation with ID:', donationId); // Debugging log

  try {
    // Fetch the current user's email
    const user = auth.currentUser;
    if (!user) {
      alert("You need to be logged in to claim a donation.");
      return;
    }
    const userEmail = user.email;

    // Fetch the donation document
    const donationRef = doc(db, 'donations', donationId);
    const donationSnap = await getDoc(donationRef); // Use getDoc() for a single document
    const donationData = donationSnap.data();

    if (!donationData) {
      alert("Donation not found.");
      return;
    }

    const donorEmail = donationData.donorEmail || "";

    // Check if the current user is the donor
    if (userEmail === donorEmail) {
      alert("You cannot claim this donation as it was made by you.");
      return;
    }

    console.log('Updating donation status to "claimed"...'); // Debugging log
    await updateDoc(donationRef, {
      status: 'claimed' // Update status to 'claimed'
    });

    // Change the button appearance
    button.innerText = "Claimed!";
    button.style.backgroundColor = "#4CAF50"; // Change to green
    button.disabled = true; // Disable button after claiming
    alert("You have successfully claimed the donation!");

    // Show the claim modal
    showClaimModal();

  } catch (error) {
    console.error('Error updating donation status:', error);
  }
}


// Function to show the claim modal
function showClaimModal() {
  const modal = document.getElementById('claimModal');
  const closeBtn = modal.querySelector('.close');

  modal.style.display = "block"; // Show the modal

  closeBtn.onclick = function() {
    modal.style.display = "none"; // Close the modal when the user clicks the close button
  }

  // Close the modal if the user clicks outside of it
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
}

// Load Donations on Page Load
window.onload = fetchDonations;

// Listen for authentication state changes (optional, for debugging)
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(`Logged in as: ${user.email}`);
  } else {
    console.log("No user is logged in.");
  }
});
