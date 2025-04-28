import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/books/");
      const data = await response.json();
      setBooks(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Mero Django Kitab!!</h1>
      <div>
        <input type="text" placeholder="Title for the Book" />
        <input type="text" placeholder="Placeholder" />
        <button>Add your Book</button>
      </div>
      {books.map(((book)=>
      <div>
      <p>Title:{book.title}</p>
      <p>Release Year:{book.release_year}</p>
      </div>))} 
    </>
  );
}

export default App;
