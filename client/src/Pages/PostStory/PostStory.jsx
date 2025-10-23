import React, { useState } from "react";
import styles from "./PostStory.module.css";

const PostStory = () => {
  const [formData, setFormData] = useState({
    title: "",
    link: "",
    story: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Story:", formData);
    alert("Story submitted successfully!");
    setFormData({ title: "", link: "", story: "" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.heading}>✍️ Post Your Story</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="title">Story Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter your story title"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="link">Real Story Link</label>
            <input
              type="url"
              id="link"
              name="link"
              value={formData.link}
              onChange={handleChange}
              placeholder="Enter the reference link (optional)"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="story">Story</label>
            <textarea
              id="story"
              name="story"
              value={formData.story}
              onChange={handleChange}
              placeholder="Write your story here..."
              rows="10"
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Publish Story 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostStory;
