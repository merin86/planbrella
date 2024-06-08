import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import styles from '../../styles/TaskEdit.module.css'; // Uppdaterad import

const TaskEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const { data } = await axios.get(`/tasks/${id}/`);
        setTitle(data.title);
        setDescription(data.description);
        
        // Lägg till en dag till datumet
        const originalDate = new Date(data.due_date);
        originalDate.setDate(originalDate.getDate() + 1);
        const formattedDate = originalDate.toISOString().split('T')[0];
        setDueDate(formattedDate);
      } catch (err) {
        console.error("Error fetching task:", err);
      }
    };

    fetchTask();
  }, [id]);

  const handleCancel = () => {
    navigate('/tasks');
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const updatedTask = {
        title,
        description,
        due_date: new Date(dueDate).toISOString(),
      };
      await axios.put(`/tasks/${id}/`, updatedTask);
      navigate('/tasks');
    } catch (err) {
      console.error("Error updating task:", err);
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
          <div className={styles.ButtonGroup}>
            <button type="submit" className={`${styles.Button} btn btn-primary`}>
              Save
            </button>
            <button type="button" onClick={handleCancel} className={`${styles.Button} btn btn-secondary`}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskEdit;
