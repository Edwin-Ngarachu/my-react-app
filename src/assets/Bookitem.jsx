import React from 'react';

const BookItem = ({ book }) => {
  return (
    <div style={styles.bookItem}>
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Year: {book.year}</p>
    </div>
  );
};

const styles = {
  bookItem: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px',
    width: '200px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
};

export default BookItem;