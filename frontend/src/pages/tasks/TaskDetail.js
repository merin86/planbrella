import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from '../../styles/Tasks.module.css';

const TaskDetail = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [state, setState] = useState('');

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const { data } = await axios.get(`/tasks/${id}/`);
        setTask(data);
        setState(data.state);
      } catch (err) {
        console.error('Error fetching task:', err);
      }
    };

    fetchTask();
  }, [id]);

  const handleStateChange = async (e) => {
    const newState = e.target.value;
    setState(newState);

    try {
      await axios.put(`/tasks/${id}/`, { ...task, state: newState }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setTask({ ...task, state: newState });
    } catch (err) {
      console.error('Error updating task state:', err.response ? err.response.data : err.message);
    }
  };

  if (!task) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.Container}>
      <div className={styles.TextBox}>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <p>Due Date: {new Date(task.due_date).toLocaleDateString()}</p>
        <p>Priority: {task.priority}</p>
        <p>Category: {task.category}</p>
        <div className={styles.FormGroup}>
          <label htmlFor="state">State:</label>
          <select id="state" value={state} onChange={handleStateChange} className={styles.Input}>
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
