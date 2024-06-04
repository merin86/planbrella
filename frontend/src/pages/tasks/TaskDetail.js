import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "../../styles/Tasks.module.css";

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
        <h2>{task?.title}</h2>
        <p>{task?.description}</p>
        <p>Due Date: {new Date(task?.due_date).toLocaleDateString()}</p>
        <p>Priority: {task?.priority}</p>
        <p>Category: {task?.category}</p>
      </div>
    </div>
  );
};

export default TaskDetail;
