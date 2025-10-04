import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utilitiy/addToDB';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);
const doubleCheckIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="32"><path d="M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z" fill="currentColor" /></svg>';

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const books = useLoaderData();

  const bookData = books.find((book) => book.bookId === bookId);
  const { bookName, image, category, tags, author, review } = bookData;

  const handleMarkAsRead = (id) => {
    // storee with id
    // where to store
    // array or collection
    // if book already exist the show alart
    // if book not exist then push
    addToStoredDB(id);

    MySwal.fire({
      title: 'My Read List Added!',
      icon: 'success',
      iconHtml: doubleCheckIcon,
      customClass: {
        icon: 'rotate-y',
      },
    });
  };
  return (
    <div>
      <h1>bookDetails </h1>

      <div className="flex gap-4">
        <img src={image} alt="" className="flex-1 w-full" />
        <div className="space-y-4 flex-1">
          <h1 className="text-4xl">{bookName}</h1>
          <h4>By: {author}</h4>
          <hr />
          <p>{category}</p>
          <hr />
          <p>Review: {review}</p>
          <p>
            Tag{' '}
            {tags.map((tag) => (
              <>
                <button className="btn bg-amber-200">{tag}</button>
              </>
            ))}
          </p>
          <div className="flex gap-5">
            <button
              onClick={() => handleMarkAsRead(id)}
              className="btn btn-active btn-info"
            >
              Read List
            </button>
            <button className="btn btn-active btn-success">WishList</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
