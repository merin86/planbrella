import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/Tasks.module.css';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axios.get('/tasks/');
        setTasks(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTasks();
  }, []);

  const handleCreateTask = () => {
    navigate('/create-task');
  };

  return (
    <div className={styles.Container}>
      <div className={styles.TextBox}>
        <h2>Your Tasks</h2>
        {tasks.length > 0 ? (
          <ul className={styles.TaskList}>
            {tasks.map((task) => (
              <li key={task.id} className={styles.TaskItem}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <p>Due: {new Date(task.due_date).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tasks available.</p>
        )}
        <button className={styles.Button} onClick={handleCreateTask}>
          Create Task
        </button>
      </div>
    </div>
  );
};

export default Tasks;
