<!-- src/views/UserDashboard.vue -->
<template>
    <div class="dashboard-container">
      <h1>User Dashboard</h1>
      <div class="dashboard-content">
        <p>Welcome, User! Here you can view your profile and access user-specific resources.</p>
        <ul>
          <li><button class="btn" @click="logout">Logout</button></li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import { getAuth, signOut } from 'firebase/auth';
  
  const router = useRouter();
  const auth = getAuth();
  
  const logout = async () => {
    try {
      await signOut(auth);
      router.push('/FireLogin'); // Redirect to login page after logout
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  </script>
  
  <style>
  .dashboard-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    text-align: center;
  }
  
  .dashboard-content {
    width: 80%;
    max-width: 600px;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin: 15px 0;
  }
  
  .btn {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    text-align: center; /* Center text */
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  