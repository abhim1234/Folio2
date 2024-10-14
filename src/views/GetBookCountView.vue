<template>
    <div id="app">
      <h1>Book Counter</h1>
  
      <!-- Button to get book count -->
      <br>
      <button @click="getBookCount">Get Book Count</button>
      <br>
      <br>
      <p v-if="count !== null">Total number of books: {{ count }}</p>
      <p v-if="error">{{ error }}</p>
      <br>
      <br>
        
      <!-- Form to add a new book -->
      <h2>Add New Book</h2>
      <form @submit.prevent="addBook">
        <div>
          <label for="isbn">ISBN</label>
          <input type="text" v-model="newBook.isbn" />
        </div>
        <div>
          <label for="name">Name</label>
          <input type="text" v-model="newBook.name" />
        </div>
        <button type="submit">Add Book</button>
      </form>
      <p v-if="addBookError">{{ addBookError }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        count: null,
        error: null,
        newBook: {
          isbn: '',  // ISBN field
          name: ''   // Name field
        },
        addBookError: null
      };
    },
    methods: {
      async getBookCount() {
        try {
          const response = await axios.get('https://countbooks-2oaioi6tkq-uc.a.run.app');
          this.count = response.data.count;
          this.error = null;
        } catch (error) {
          console.error('Error fetching book count:', error);
          this.error = 'Failed to fetch book count';
          this.count = null;
        }
      },
      async addBook() {
        try {
          const response = await axios.post('https://addbook-2oaioi6tkq-uc.a.run.app', this.newBook);
          // Display success message with book name
          alert(`Book added successfully: ${this.newBook.name}`);
          
          // Reset form after submission
          this.newBook = { isbn: '', name: '' };  // Clear the form
          this.addBookError = null;
        } catch (error) {
          console.error('Error adding book:', error);
          this.addBookError = 'Failed to add book';
        }
      }
    }
  };
  </script>
  