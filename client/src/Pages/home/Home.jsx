import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Home.module.css";

const Home = ({stories, loading}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // Pagination calculations
  const booksPerPage = 15;
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = stories.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil(stories.length / booksPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
         <div className={styles.header}>
          <h1 className={styles.heading}>📚 Story Library</h1>
          <button
            className={styles.createBtn}
            onClick={() => navigate("/postStory")}
          >
            Create Post
          </button>
        </div>

        <ul className={styles.bookList}>
          {!loading && currentBooks.map((book) => (
            <li key={book._id}>
              <a href={`/story/${book._id}`} className={styles.bookLink}>
                {book.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Pagination Controls */}
        <div className={styles.pagination}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ◀ Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

