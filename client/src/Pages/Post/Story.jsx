import { useEffect, useState } from "react";
import styles from "./Story.module.css";
import { useParams } from "react-router-dom";
import Loading from "../loading/Loading";

const Story = ({ stories, loading }) => {
  const [story, setStory] = useState(null);
  const [content, setContent] = useState("");
  const [words, setWords] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { id } = useParams();
  const wordsPerPage = 15000;

  useEffect(() => {
    if (!loading) {
      const story = stories.find((s) => s._id === id);
      if (story) setStory(story);
    }
  }, [loading, stories, id]);

  useEffect(() => {
    if (story) {
      const fullContent = story.content.join(" ");
      setContent(fullContent);
    }
  }, [story]);

  useEffect(() => {
    if (content) {
      const wordArray = content.split(" ");
      const total = Math.ceil(wordArray.length / wordsPerPage);
      setWords(wordArray);
      setTotalPages(total);
    }
  }, [content]);

  const start = (currentPage - 1) * wordsPerPage;
  const end = start + wordsPerPage;
  const currentText = words.slice(start, end).join(" ");

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // 🔥 This ensures scroll happens *after* content updates
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleAddPart = () => {
    alert("Feature coming soon: Add more parts to this story!");
  };

  if (loading || !story || !words.length) {
    return <Loading />
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{story?.title}</h1>
        <button className={styles.addPartBtn} onClick={handleAddPart}>
          Add Part
        </button>
      </div>

      <div className={styles.linkSection}>
        {story?.link && (
          <a
            href={story.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.storyLink}
          >
            🔗 {story.link}
          </a>
        )}
     
      </div>

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
