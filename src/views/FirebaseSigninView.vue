<template>
    <div class="signin-container">
      <h1>Sign In</h1>
      <p><input type="text" placeholder="Email" v-model="email" class="form-control" /></p>
      <p><input type="password" placeholder="Password" v-model="password" class="form-control" /></p>
      <p>
        <select v-model="role" class="form-control">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </p>
      <p><button class="btn" @click="signin">Sign in via Firebase</button></p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
  import { getFirestore, doc, getDoc } from 'firebase/firestore';
  
  const email = ref("");
  const password = ref("");
  const role = ref("user"); // Default role selected
  const router = useRouter();
  const auth = getAuth();
  const db = getFirestore();
  
  const signin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
      const user = userCredential.user;
  
      // Fetch user role from Firestore
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);
  
      if (userDoc.exists()) {
        const userData = userDoc.data();
        const storedRole = userData.role; // Get the user's role from Firestore
  
        console.log("Stored User role:", storedRole);
        console.log("Selected Role:", role.value);
  
        // Check if the selected role matches the stored role
        if (role.value !== storedRole) {
          alert("Selected role does not match the stored role. Please check your selection.");
          return;
        }
  
        // Redirect based on the user's role
        if (storedRole === 'admin') {
          router.push("/admin-dashboard"); // Admin dashboard route
        } else if (storedRole === 'user') {
          router.push("/user-dashboard"); // User dashboard route
        } else {
          router.push("/"); // Default route
        }
      } else {
        console.error("No such document!");
        alert("User role not found. Please contact support.");
      }
  
      console.log("Firebase Sign-In Successful! Current user:", auth.currentUser);
    } catch (error) {
      console.error("Error during sign-in:", error.code);
      alert("Error: " + error.message); // Display error to the user
    }
  };
  </script>
  
  <style>
  .signin-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top: 50px;
    text-align: center;
  }
  
  input, select, .btn {
    padding: 10px;
    width: 250px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box; /* Ensures padding is included in width */
  }
  
  .btn {
    background-color: #007bff;
    color: white;
    cursor: pointer;
    text-align: center; /* Center text */
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  