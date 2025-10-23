import React, { useState } from "react";
import styles from "./Story.module.css";

const generateLongContent = (length) => {
  const words = Array.from({ length }, (_, i) => `word${i + 1}`);
  return words.join(" ");
};

const Story = () => {
  const title = "The Journey Beyond the Stars";
  const content = generateLongContent(150000); // simulate a long story

  const words = content.split(" ");
  const wordsPerPage = 15000; 
  const totalPages = Math.ceil(words.length / wordsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const start = (currentPage - 1) * wordsPerPage;
  const end = start + wordsPerPage;
  const currentText = words.slice(start, end).join(" ");

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>{currentText}</div>

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
  );
};

export default Story;
