<template>
    <div>
      <h1>All Books</h1>
      <pre>{{ allBooks }}</pre>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        allBooks: null,
        error: null,
      };
    },
    mounted() {
      this.getAllBooks();
    },
    methods: {
      async getAllBooks() {
        try {
          const response = await axios.get('https://getallbooks-2oaioi6tkq-uc.a.run.app');
          this.allBooks = response.data;
          this.error = null;
        } catch (error) {
          console.error('Error fetching all books:', error);
          this.error = error;
        }
      },
    },
  };
  </script>
  