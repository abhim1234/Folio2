<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="login" class="login-form">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" v-model="username" id="username" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { isAuthenticated } from '../router'; // Ensure correct import

const username = ref('');
const password = ref('');
const router = useRouter();

const validUsername = 'abhi';
const validPassword = 'raj';

const login = () => {
  if (!username.value || !password.value) {
    alert('Both username and password are required'); // Browser popup
    return;
  }
  if (username.value === validUsername && password.value === validPassword) {
    isAuthenticated.value = true; // Update authentication state
    router.push('/'); // Redirect to home page
  } else {
    alert('Invalid Credentials'); // Browser popup for invalid credentials
  }
};
</script>

<style>
/* Removed the container styles as they have been moved to App.vue */
</style>
