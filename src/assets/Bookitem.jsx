
import React from 'react';

const BookItem = ({ book }) => {
  return (
    <div style={styles.bookItem}>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Year: {book.year}</p>
      <p>Summary: {book.Summary}</p>
    </div>
  );
};

const styles = {
  bookItem: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px',
    width: '400px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
};

export default BookItem;
