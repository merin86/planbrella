import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { FaCheck } from 'react-icons/fa';
import styles from "../../styles/Tasks.module.css";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axios.get("/tasks/");
        const sortedTasks = data.sort(
          (a, b) => new Date(a.due_date) - new Date(b.due_date)
        );
        setTasks(sortedTasks);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div className={styles.Container}>
      <div className={styles.TextBox}>
        <div className={styles.ScrollableContent}>
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
                <div>
                  {task.title} {task.state === 'done' && <FaCheck />}
                </div>
                <div>{task.due_date}</div>
                <div>
                  <Link
                    to={`/tasks/${task.id}`}
                    className={`btn btn-primary ${styles.TaskButton}`}
                  >
                    View
                  </Link>
                </div>
                <div>
                  <Link
                    to={`/tasks/${task.id}/edit`}
                    className={`btn btn-warning ${styles.TaskButton}`}
                  >
                    Edit
                  </Link>
                </div>
                <div>
                  <button className={`btn btn-danger ${styles.TaskButton}`}>
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No tasks available.</p>
          )}
        </div>
        <div className={styles.CreateButton}>
          <NavLink to="/tasks/create" className="btn btn-success">
            Create Task
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
