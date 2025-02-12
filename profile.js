// Firebase configuration (replace with your own)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Handle form submission
const profileForm = document.getElementById("profile-form");
profileForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = profileForm.name.value;
  const email = profileForm.email.value;
  const password = profileForm.password.value;
  const bio = profileForm.bio.value;
  const profilePicture = profileForm["profile-picture"].files[0];

  try {
    // Create user with email and password
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Upload profile picture (optional)
    let profilePictureUrl = "";
    if (profilePicture) {
      const storageRef = firebase.storage().ref(`profile-pictures/${user.uid}`);
      await storageRef.put(profilePicture);
      profilePictureUrl = await storageRef.getDownloadURL();
    }

    // Save profile data to Firestore
    await db.collection("profiles").doc(user.uid).set({
      name,
      email,
      bio,
      profilePicture: profilePictureUrl,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    alert("Profile created successfully!");
    window.location.href = "homepage.html"; // Redirect to homepage
  } catch (error) {
    console.error("Error creating profile:", error);
    alert(error.message);
  }
});
