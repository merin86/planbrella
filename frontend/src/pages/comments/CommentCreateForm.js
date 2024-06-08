import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../styles/CommentCreateForm.module.css";

const CommentCreateForm = ({ taskId, onCommentAdded }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    return () => {
      setIsMounted(false);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setError("Comment cannot be empty or whitespace.");
      return;
    }

    try {
      const { data } = await axios.post("/comments/", { text, task: taskId });
      if (isMounted) {
        onCommentAdded(data);
        setText("");
        setError(null);
      }
    } catch (err) {
      console.error("Error posting comment:", err);
      if (isMounted) {
        setError("Failed to post comment. Please try again.");
      }
    }
  };

  return (
    <div className={styles.CommentCreateForm}>
      <form onSubmit={handleSubmit}>
        <textarea
          className={styles.Textarea}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a comment..."
        ></textarea>
        {error && <div className={styles.Error}>{error}</div>}
        <button type="submit" className={`btn btn-primary ${styles.Button}`}>
          Post
        </button>
      </form>
    </div>
  );
};

export default CommentCreateForm;
