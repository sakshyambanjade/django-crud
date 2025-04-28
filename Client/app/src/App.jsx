import './App.css';
import React, { useState, useEffect } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Box, Typography } from '@mui/material';

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [status, setStatus] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => { fetchBooks(); }, []);

  const fetchBooks = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/books/");
      setBooks(await res.json());
    } catch (err) {
      console.error(err);
    }
  };

  const addBook = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/books/create/", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, release_year: +releaseYear, status }),
      });
      if (res.ok) {
        fetchBooks();
        setTitle('');
        setReleaseYear('');
        setStatus('');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box display="flex" width="100vw" height="100vh" m={0} p={0} overflow="hidden">
      {/* Table Section */}
      <Box flex="1" p={0} m={0} overflow="auto">
        {/* Table */}
        <table className="table" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Index</th>
              <th>Title</th>
              <th>Release Year</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book, index) => (
              <tr key={book.id}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.release_year}</td>
                <td>
                  <span className={`status-dot ${book.status.toLowerCase()}`}></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>

      {/* Right Section */}
      <Box width="300px" bgcolor="#f4f4f4" p={2} display="flex" flexDirection="column" borderLeft="1px solid #ccc" overflow="auto">
        
        {/* Search Books Section */}
        <Typography variant="h6" gutterBottom fontWeight="bold" fontSize="18px">Search Books</Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search by title..."
          size="small"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          margin="normal"
        />

        <Box mt={4} />

        {/* Add New Book Section */}
        <Typography variant="h6" gutterBottom sx={{ color: 'black', fontWeight: 'bold', textTransform: 'uppercase' }}>
          Add New Book
        </Typography>
        <TextField
          fullWidth
          label="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Release Year"
          type="number"
          value={releaseYear}
          onChange={e => setReleaseYear(e.target.value)}
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Status</InputLabel>
          <Select
            value={status}
            onChange={e => setStatus(e.target.value)}
            label="Status"
          >
            <MenuItem value="available">Available</MenuItem>
            <MenuItem value="prebooked">Pre-booked</MenuItem>
            <MenuItem value="taken">Taken</MenuItem>
          </Select>
        </FormControl>
        <Button
          fullWidth
          variant="contained"
          onClick={addBook}
          sx={{
            mt: 2,
            backgroundColor: '#6D31ED',
            '&:hover': { backgroundColor: '#5c27c7' }
          }}
        >
          Add Book
        </Button>
      </Box>
    </Box>
  );
}

export default App;
