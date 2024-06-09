import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Alert } from "react-bootstrap";
import styles from "../../styles/TaskEdit.module.css";

const TaskEdit = () => {
  const { id } = useParams(); // Retrieve task ID from URL parameters
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Fetch task details on component mount
    const fetchTask = async () => {
      try {
        const { data } = await axios.get(`/tasks/${id}/`);
        setTitle(data.title);
        setDescription(data.description);

        // Adjust due date by adding one day for proper display
        const dueDate = new Date(data.due_date);
        dueDate.setDate(dueDate.getDate() + 1);
        setDueDate(dueDate.toISOString().split("T")[0]);
      } catch (err) {
        console.error("Error fetching task:", err);
      }
    };

    fetchTask();
  }, [id]);

  // Handle cancel button click
  const handleCancel = () => {
    navigate("/tasks");
  };

  // Handle save button click
  const handleSave = async (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString().split("T")[0];

    // Validate form fields
    const newErrors = {};
    if (!title.trim())
      newErrors.title = "Title is required and cannot be blank.";
    if (!description.trim())
      newErrors.description = "Description is required and cannot be blank.";
    if (!dueDate || dueDate < currentDate)
      newErrors.dueDate = "Due Date must be today or later.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const updatedTask = {
        title,
        description,
        due_date: new Date(dueDate).toISOString(),
      };
      // Send updated task data to the server
      await axios.put(`/tasks/${id}/`, updatedTask, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/tasks");
    } catch (err) {
      console.error(
        "Error updating task:",
        err.response ? err.response.data : err.message
      );
    }
  };

  return (
    <div className={styles.Container}>
      <div className={styles.TextBox}>
        <h2>Edit Task</h2>
        <form onSubmit={handleSave} className={styles.Form}>
          <div className={styles.FormGroup}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className={styles.Input}
            />
            {errors.title && <Alert variant="danger">{errors.title}</Alert>}
          </div>
          <div className={styles.FormGroup}>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className={styles.Textarea}
            />
            {errors.description && (
              <Alert variant="danger">{errors.description}</Alert>
            )}
          </div>
          <div className={styles.FormGroup}>
            <label htmlFor="dueDate">Due Date:</label>
            <input
              type="date"
              id="dueDate"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
              className={styles.Input}
            />
            {errors.dueDate && <Alert variant="danger">{errors.dueDate}</Alert>}
          </div>
          <div className={styles.ButtonGroup}>
            <button
              type="submit"
              className={`btn btn-success ${styles.Button}`}
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className={`btn btn-danger ${styles.Button}`}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskEdit;
