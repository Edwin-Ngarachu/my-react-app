import React from 'react';
import BookList from './assets/Booklist';

const App = () => {
  const books = [
    { id: 1, title: 'The pearl', author: 'mary simon', year: 1989 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'mark r', year: 1966 },
    { id: 3, title: 'caucasian chalk', author: 'George william', year: 1949 },
    { id: 4, title: 'Pride always', author: 'Jennnifer lopez', year: 1899 },
    { id: 5, title: 'The Catcher eyes', author: 'James David', year: 1959 },
  ];

  return (
    <div style={styles.app}>
      <h1>My List</h1>
      <BookList books={books} />
    </div>
  );
};

const styles = {
  app: {
    textAlign: 'center',
    padding: '20px',
  },
};

export default App;