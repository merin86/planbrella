import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import styles from '../../styles/TaskCreateForm.module.css';

const TaskCreateForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

    // Validera fält
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required and cannot be blank.';
    if (!description.trim()) newErrors.description = 'Description is required and cannot be blank.';
    if (!dueDate || dueDate < currentDate) newErrors.dueDate = 'Due Date must be today or later.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const newTask = {
        title,
        description,
        due_date: new Date(dueDate).toISOString(),
      };
      await axios.post('/tasks/', newTask, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      navigate('/tasks');
    } catch (err) {
      console.error('Error creating task:', err.response ? err.response.data : err.message);
    }
  };

  return (
    <div className={styles.Container}>
      <div className={styles.TextBox}>
        <h2>Create a New Task</h2>
        <form onSubmit={handleSubmit} className={styles.Form}>
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
            {errors.description && <Alert variant="danger">{errors.description}</Alert>}
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
            <button type="submit" className={`btn btn-success ${styles.Button}`}>
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskCreateForm;
