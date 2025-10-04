import { FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const Book = ({ book }) => {
  const { bookName, image, rating, category, bookId, totalPages } = book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm p-5 border-1">
        <figure className="bg-gray-200 p-4">
          <img src={image} alt="Shoes" className="w-[150px] h-[220px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{totalPages}</div>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating} <FaStarHalfAlt />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
