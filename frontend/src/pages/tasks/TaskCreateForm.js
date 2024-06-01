import React, { useState } from 'react';
import axios from 'axios';
import styles from '../../styles/Tasks.module.css';

const TaskCreateForm = ({ onTaskCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/tasks/', {
        title,
        description,
        due_date: dueDate,
      });
      setTitle('');
      setDescription('');
      setDueDate('');
      onTaskCreated(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.Form}>
      <h2>Create a New Task</h2>
      <div className={styles.FormGroup}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className={styles.FormGroup}>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className={styles.FormGroup}>
        <label htmlFor="dueDate">Due Date:</label>
        <input
          type="date"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </div>
      <button type="submit" className={styles.Button}>
        Create Task
      </button>
    </form>
  );
};

export default TaskCreateForm;
