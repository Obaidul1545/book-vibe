import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({ booksData }) => {
  return (
    <div>
      <h1>hello books</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {booksData.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
