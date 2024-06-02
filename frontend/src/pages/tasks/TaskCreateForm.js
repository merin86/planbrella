import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/Tasks.module.css';

const TaskCreateForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
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
          </div>
          <div className={styles.FormGroup}>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={styles.Textarea}
            />
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
          </div>
          <button type="submit" className={styles.Button}>
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskCreateForm;
