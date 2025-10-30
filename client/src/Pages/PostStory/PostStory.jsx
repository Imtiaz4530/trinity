import React, { useState } from "react";

import { createStory } from "../../api/storyApi";
import styles from "./PostStory.module.css";
import { useNavigate } from "react-router-dom";

const PostStory = () => {
  const [formData, setFormData] = useState({
    title: "",
    link: "",
    content: "",
  });
  
   const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const storyData = {
      title: formData.title,
      link: formData.link,
      content: [formData.content], 
    };

    const res = await createStory(storyData);

    console.log("Story submitted successfully:", res);
    alert("✅ Story posted successfully!");
    setFormData({ title: "", link: "", content: "" });

      setTimeout(() => {
        navigate("/");
      }, 400);

  } catch (error) {
    console.error("Error submitting story:", error);
    alert("❌ Failed to post story. Please try again.");
  }
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
            <label htmlFor="content">Story</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
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
