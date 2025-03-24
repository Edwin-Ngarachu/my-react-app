import React from 'react';
import BookItem from './Bookitem';

const BookList = ({ books }) => {
  return (
    <div style={styles.bookList}>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

const styles = {
  bookList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

export default BookList;