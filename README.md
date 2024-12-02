

# 🥗 FOODCONNECT (Food Donation Platform)  

### **Reducing Food Wastage Through Technology**

Our platform is a tech-driven solution to connect individuals, NGOs, and restaurants for reducing food wastage. With features like donation tracking, claiming donations, receipt generation, and a user-friendly interface, this platform creates a significant impact.

---

## 🚀 Features

### **Authentication**
- Secure login and signup functionality using **Firebase Authentication**.
- User types: **Individual Donors**, **NGOs**, and **Restaurants**.
- Password recovery and email verification are supported.

![Authentication Page Screenshot](public/screenshot_for_readme/auth.PNG)

---

### **Home Page**
- **Dynamic Charts**: Showcases donation statistics (e.g., meals donated, donor types, etc.) using **Chart.js**.
- **Quick Navigation Buttons**:
  - `Profile`
  - `Post Donation`
  - `Claim Donation`
  - `Contact Us`
- **Aesthetic Design**: Gradient backgrounds, animations, and interactive UI.

![Home Page Screenshot](public/screenshot_for_readme/mainhomepage.PNG)

---

### **Profile Page**
- Displays:
  - **User Information**: Email, user type, and donation statistics.
  - **Coins Owned**: Rewards for every donation (redeemable for tax benefits).
- Includes a logout button for quick sign-out.

![Profile Page Screenshot](public/screenshot_for_readme/profile.PNG)

---

### **Post Donation Page**
- **Post Food Donations**:
  - Fields: Food Type, Quantity, Expiry Date, Pickup Location.
  - Submit donation posts visible to NGOs and other entities.
- Real-time database updates via Firebase.

![Post Page Screenshot](public/screenshot_for_readme/post donation.PNG)


---

### **Claim Donation Page**
- Allows NGOs or needy individuals to claim donations.
- Real-time updates on food availability with instant claim notifications.
- Tracks claimed donations for future reference.

![Claim Donation Page Screenshot](public/screenshot_for_readme/claimdonation.PNG)

---

### **Receipt Generator**
- Generates a **donation receipt** for tax redemption purposes under **India's 80G Act**.
- Downloadable as PDF for user convenience.

![Receipt Generator Screenshot](public/screenshot_for_readme/reciept_generator_page.PNG)

---

## 📊 Graphs and Statistics
- Interactive **line charts** and **pie charts** to track:
  - Meals donated over time.
  - Donor types (e.g., Individuals, Restaurants, NGOs).
- Powered by **Chart.js** for a sleek, responsive design.

![Graphs Screenshot](public/screenshot_for_readme/graphs.PNG)

---

## 💡 How We Help?

1. **Food Donation**  
   Donors contribute surplus food items to help others.

2. **Earn Coins**  
   Reward system for donors—coins can be redeemed for benefits.

3. **Tax Benefits**  
   Receipts for 80G tax redemption provided upon donation claims.

4. **Impact Visualization**  
   Real-time tracking of donation statistics through charts and graphs.

---

## 🛠️ Technologies Used

### **Frontend**
- **HTML5**, **CSS3**, **JavaScript**: To create a polished and interactive user interface.
- **Tailwind CSS**: For responsive and modern design.

### **Backend**
- **Firebase Authentication**: Secure user login and signup.
- **Firebase Realtime Database**: Storing and managing donations and user data.

### **Data Visualization**
- **Chart.js**: For interactive graphs and donation statistics.

---



## 🔗 Get Started

### Clone the Repository
```bash
git clone https://github.com/your-repo-name.git
cd your-repo-name
