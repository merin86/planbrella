import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "../../styles/TaskDetail.module.css";

const TaskDetail = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const { data } = await axios.get(`/tasks/${id}/`);
        setTask(data);
      } catch (err) {
        console.error("Error fetching task:", err);
      }
    };
  
    fetchTask();
  }, [id]);
  

  return (
    <div className={styles.Container}>
      <div className={styles.TextBox}>
        <div className={styles.Title}>{task?.title}</div>
        <div className={styles.Description}>{task?.description}</div>
        <hr className={styles.Divider} />
        <div className={styles.DueDate}>Due Date: {new Date(task?.due_date).toLocaleDateString()}</div>
        <div className={styles.ButtonsContainer}>
          <button className={`btn btn-warning ${styles.Button}`}>Edit</button>
          <button className={`btn btn-danger ${styles.Button}`}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
