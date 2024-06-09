import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import styles from "../../styles/CommentCreateForm.module.css";

const CommentCreateForm = ({ taskId, onCommentAdded }) => {
  // State to manage the comment text
  const [text, setText] = useState("");
  // State to manage error messages
  const [error, setError] = useState(null);
  // State to manage component mount status
  const [isMounted, setIsMounted] = useState(true);

  // Effect to clean up mount status on unmount
  useEffect(() => {
    return () => {
      setIsMounted(false);
    };
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setError("Comment cannot be empty or whitespace.");
      return;
    }

    try {
      // Send a POST request to create a new comment
      const { data } = await axios.post("/comments/", { text, task: taskId });
      if (isMounted) {
        onCommentAdded(data); // Call the callback function to add the new comment
        setText(""); // Reset the comment text
        setError(null); // Clear any existing errors
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

// Prop types for the component
CommentCreateForm.propTypes = {
  taskId: PropTypes.number.isRequired, // The ID of the task to which the comment is added
  onCommentAdded: PropTypes.func.isRequired, // Callback function to handle adding a new comment
};

export default CommentCreateForm;
