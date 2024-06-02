import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import styles from '../../styles/Tasks.module.css';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axios.get('/tasks/');
        setTasks(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className={styles.Container}>
      <div className={styles.TextBox}>
        <div className={styles.HeaderRow}>
          <div>Title</div>
          <div>Due Date</div>
          <div>View Task</div>
          <div>Edit Task</div>
          <div>Delete Task</div>
        </div>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div key={task.id} className={styles.TaskItem}>
              <div>{task.title}</div>
              <div>{task.due_date}</div>
              <div>
                <Link to={`/tasks/${task.id}`} className="btn btn-primary">View</Link>
              </div>
              <div>
                <Link to={`/tasks/${task.id}/edit`} className="btn btn-warning">Edit</Link>
              </div>
              <div>
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p>No tasks available.</p>
        )}
        <div className={styles.CreateButton}>
          <NavLink to="/create-task" className="btn btn-success">
            Create Task
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
