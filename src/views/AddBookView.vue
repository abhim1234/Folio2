<template>
  <div class="page-container">
    <h1 class="title">Add, Update, or Delete Book</h1>

    <!-- Form for adding or updating a book -->
    <form @submit.prevent="editMode ? updateBook() : addBook()" class="book-form">
      <div class="form-group">
        <label for="isbn">ISBN:</label>
        <input type="text" v-model="isbn" id="isbn" required />
      </div>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" required />
      </div>
      <div class="form-group form-group-button">
        <button type="submit" class="submit-button">
          {{ editMode ? 'Update Book' : 'Add Book' }}
        </button>
      </div>
    </form>
	
	

    <br />

    <!-- Display the list of books -->
    <h2 class="book-list-title">Books List</h2>
    <ul class="book-list">
      <li v-for="book in books" :key="book.id" class="book-item">
        {{ book.name }} - ISBN: {{ book.isbn }}
        <div class="book-actions">
          <button @click="editBook(book)" class="action-button">Edit</button>
          <button @click="deleteBook(book.id, book.name)" class="action-button">Delete</button>
        </div>
      </li>
    </ul>

    <!-- Filter Selection -->
    <div class="filter-options">
      <h3>Choose Filter Option</h3>
      <form class="filter-form">
        <!-- Filter Selection Dropdown -->
        <div class="form-group">
          <label for="filter-type">Select Filter Type:</label>
          <select v-model="filterType" @change="resetFilters">
            <option value="">Select...</option>
            <option value="where">WHERE</option>
            <option value="orderby">ORDER BY</option>
            <option value="limit">LIMIT</option>
          </select>
        </div>

        <!-- WHERE Clause Input -->
        <div v-if="filterType === 'where'" class="form-group">
          <label for="isbn-filter">Filter by ISBN greater than:</label>
          <input type="number" id="isbn-filter" v-model="isbnFilter" placeholder="Enter ISBN number" />
        </div>

        <!-- ORDER BY Clause Input -->
        <div v-if="filterType === 'orderby'" class="form-group">
          <label for="order-by">Order By:</label>
          <select v-model="orderByField">
            <option value="name">Name</option>
            <option value="isbn">ISBN</option>
          </select>
        </div>

        <!-- LIMIT Clause Input -->
        <div v-if="filterType === 'limit'" class="form-group">
          <label for="limit">Limit results to:</label>
          <input type="number" v-model="limitResults" placeholder="Limit results" />
        </div>

        <div class="form-group form-group-button">
          <button @click="fetchBooksWithFilters" type="button">Apply Filter</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { db } from "../firebase/init.js";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default {
  setup() {
    const books = ref([]);
    const isbn = ref("");
    const name = ref("");
    const editMode = ref(false);
    const currentBookId = ref(null);

    // Filter options
    const isbnFilter = ref(null); // ISBN filter value
    const orderByField = ref("name"); // Default orderBy field
    const limitResults = ref(null); // Limit for query
    const filterType = ref(""); // Filter type selection (where, orderby, limit)

    // Reset filters when changing filter type
    const resetFilters = () => {
      isbnFilter.value = null;
      orderByField.value = "name";
      limitResults.value = null;
    };

    // Fetch books from Firestore based on the chosen filter type
    const fetchBooksWithFilters = async () => {
      let q = collection(db, "books");

      // Apply "WHERE" filter if selected
      if (filterType.value === "where" && isbnFilter.value) {
        q = query(q, where("isbn", ">", Number(isbnFilter.value)));
      }

      // Apply "ORDER BY" filter if selected
      if (filterType.value === "orderby") {
        q = query(q, orderBy(orderByField.value));
      }

      // Apply "LIMIT" filter if selected
      if (filterType.value === "limit" && limitResults.value) {
        q = query(q, limit(Number(limitResults.value)));
      }

      // Fetch the books from Firestore
      const querySnapshot = await getDocs(q);
      const booksArray = [];
      querySnapshot.forEach((doc) => {
        booksArray.push({ id: doc.id, ...doc.data() });
      });

      // Update the books ref with the final result
      books.value = booksArray;
    };

    // Add a new book to Firestore
    const addBook = async () => {
      try {
        const isbnNumber = Number(isbn.value);
        if (isNaN(isbnNumber)) {
          alert("ISBN must be a valid number");
          return;
        }

        await addDoc(collection(db, "books"), {
          isbn: isbnNumber,
          name: name.value,
        });

        alert(`Book "${name.value}" added successfully!`);

        isbn.value = "";
        name.value = "";
        fetchBooksWithFilters(); // Refresh the book list after adding
      } catch (error) {
        console.error("Error adding book:", error);
      }
    };

    // Edit an existing book
    const editBook = (book) => {
      isbn.value = book.isbn;
      name.value = book.name;
      currentBookId.value = book.id;
      editMode.value = true;
    };

    // Update the selected book in Firestore
    const updateBook = async () => {
      try {
        const isbnNumber = Number(isbn.value);
        if (isNaN(isbnNumber)) {
          alert("ISBN must be a valid number");
          return;
        }

        const bookDoc = doc(db, "books", currentBookId.value);
        await updateDoc(bookDoc, {
          isbn: isbnNumber,
          name: name.value,
        });

        alert(`Book "${name.value}" updated successfully!`);

        isbn.value = "";
        name.value = "";
        editMode.value = false;
        fetchBooksWithFilters(); // Refresh the book list after updating
      } catch (error) {
        console.error("Error updating book:", error);
      }
    };

    // Delete a book from Firestore
    const deleteBook = async (bookId, bookName) => {
      try {
        await deleteDoc(doc(db, "books", bookId));
        alert(`Book "${bookName}" deleted successfully!`);
        fetchBooksWithFilters(); // Refresh the book list after deleting
      } catch (error) {
        console.error("Error deleting book:", error);
      }
    };

    // Fetch the books on component mount with default settings
    onMounted(() => {
      fetchBooksWithFilters();
    });

    return {
      books,
      isbn,
      name,
      addBook,
      editBook,
      updateBook,
      deleteBook,
      editMode,
      isbnFilter,
      orderByField,
      limitResults,
      filterType,
      fetchBooksWithFilters,
      resetFilters,
    };
  },
};
</script>

  <style scoped>
  .page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #f5f5f5;
  }
  
  /* Title Styling */
  .title {
    margin-bottom: 20px;
    font-size: 28px;
    text-align: center;
    color: #333;
  }
  
  /* Form Styling */
  .book-form {
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-gap: 15px;
    max-width: 600px;
    width: 100%;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    display: contents;
  }
  
  label {
    text-align: right;
    padding-right: 10px;
    font-weight: bold;
  }
  
  input,
  select {
    padding: 10px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
  
  /* Centered Button */
  .form-group-button {
    grid-column: span 2; /* Span across both columns */
    display: flex;
    justify-content: center;
  }
  
  .submit-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .submit-button:hover {
    background-color: #0056b3;
  }
  
  /* Books List */
  .book-list-title {
    margin-top: 30px;
    font-size: 22px;
    color: #333;
  }
  
  .book-list {
    list-style-type: none;
    padding: 0;
    margin: 20px 0 0 0;
    width: 100%;
    max-width: 600px;
  }
  
  .book-item {
    padding: 15px;
    background-color: #fff;
    margin-bottom: 10px;
    border-radius: 4px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .book-actions {
    display: flex;
    gap: 10px;
  }
  
  .action-button {
    padding: 8px 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
  }
  
  .action-button:hover {
    background-color: #0056b3;
  }
  
  /* Filter Options Styling */
  .filter-options {
    margin-top: 20px;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    width: 100%;
  }
  
  /* Filter Form Layout */
  .filter-form {
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-gap: 15px;
  }
  
  .filter-form label {
    text-align: right;
  }
  
  .filter-form .form-group-button {
    grid-column: span 2;
    display: flex;
    justify-content: center;
  }
  
  .filter-form button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .filter-form button:hover {
    background-color: #0056b3;
  }
  </style>
  