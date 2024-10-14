const { onRequest } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });

admin.initializeApp();

// Function to capitalize the name field of a book
function capitalizeFields(book) {
  let capitalizedBook = { ...book };  // Copy the book object
  if (typeof capitalizedBook.name === 'string') {
    capitalizedBook.name = capitalizedBook.name.toUpperCase();  // Capitalize the name
  }
  return capitalizedBook;
}

exports.addBook = onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {
      // Extract the book data from the request body
      const book = req.body;

      // Capitalize the name field
      const capitalizedBook = capitalizeFields(book);

      // Add the capitalized book to Firestore
      const docRef = await admin.firestore().collection("books").add(capitalizedBook);

      res.status(200).send({ message: `Book added with ID: ${docRef.id}` });
    } catch (error) {
      console.error("Error adding book:", error.message);
      res.status(500).send("Error adding book");
    }
  });
});

exports.countBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const booksCollection = admin.firestore().collection("books");
      const snapshot = await booksCollection.get();
      const count = snapshot.size;

      res.status(200).send({ count });
    } catch (error) {
      console.error("Error counting books:", error.message);
      res.status(500).send("Error counting books");
    }
  });
});

exports.getAllBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const booksCollection = admin.firestore().collection("books");
      const snapshot = await booksCollection.get();
      let books = [];

      snapshot.forEach(doc => {
        books.push({ id: doc.id, ...doc.data() });
      });

      res.status(200).json(books);  // Return the list of books in JSON format
    } catch (error) {
      console.error("Error getting all books:", error.message);
      res.status(500).send("Error getting all books");
    }
  });
});
