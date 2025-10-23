import { useState } from "react";
import styles from "./Home.module.css";

const Home = () => {
  // Dummy book data (you can replace this with your backend data later)
  const books = Array.from({ length: 72 }, (_, i) => ({
    id: i + 1,
    title: ` Book Title ${i + 1}`,
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 15;

  // Pagination calculations
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil(books.length / booksPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>📚 Book Library</h1>

        <ul className={styles.bookList}>
          {currentBooks.map((book) => (
            <li key={book.id}>
              <a href={`/books/${book.id}`} className={styles.bookLink}>
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

