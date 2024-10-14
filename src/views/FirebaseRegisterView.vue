<template>
    <div class="register-container">
      <h1>Create an Account</h1>
      <p><input type="text" placeholder="Email" v-model="email" class="form-control" /></p>
      <p><input type="password" placeholder="Password" v-model="password" class="form-control" /></p>
      <p>
        <select v-model="role" class="form-control">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </p>
      <p><button class="btn" @click="register">Save to Firebase</button></p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
  import { useRouter } from 'vue-router';
  import { getFirestore, setDoc, doc } from 'firebase/firestore'; // Import Firestore functions
  
  const email = ref("");
  const password = ref("");
  const role = ref("user"); // Default role
  const router = useRouter();
  const auth = getAuth();
  const db = getFirestore(); // Initialize Firestore
  
  const register = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
      const user = userCredential.user;
  
      // Store user data in Firestore with the UID as the document ID
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        role: role.value, // Save the selected role
        createdAt: new Date(),
      });
  
      console.log("Firebase Register Successful! User data saved in Firestore.");
      router.push("/FireLogin"); // Redirect to login page
    } catch (error) {
      console.error("Error during registration:", error.code);
      alert("Error: " + error.message); // Display error to the user
    }
  };
  </script>
  
  <style>
  .register-container {
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
  