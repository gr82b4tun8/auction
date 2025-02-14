import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const profileForm = document.getElementById("profile-form");

profileForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent the form from refreshing the page

  // Get the current authenticated user
  const user = auth.currentUser;
  if (!user) {
    alert("You must be logged in to create a profile.");
    return;
  }

  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const bio = document.getElementById("bio").value;
  const profilePicture = document.getElementById("profile-picture").value;

  // Create a profile object
  const profileData = {
    name,
    email,
    bio,
    profilePicture,
    createdAt: new Date().toISOString(),
  };

  try {
    // Save the profile data to Firestore
    await setDoc(doc(db, "users", user.uid), profileData);
    alert("Profile created successfully!");
    window.location.href = "/profile.html"; // Redirect to the profile page
  } catch (error) {
    console.error("Error creating profile:", error);
    alert("An error occurred. Please try again.");
  }
});
