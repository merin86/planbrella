import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskCreateForm from './TaskCreateForm';
import styles from '../../styles/Tasks.module.css';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

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

  const handleTaskCreated = (newTask) => {
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.TasksBox}>
        <h2>Tasks</h2>
        <TaskCreateForm onTaskCreated={handleTaskCreated} />
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div key={task.id} className={styles.Task}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Due Date: {new Date(task.due_date).toLocaleDateString()}</p>
            </div>
          ))
        ) : (
          <p>No tasks available.</p>
        )}
      </div>
    </div>
  );
};

export default Tasks;
