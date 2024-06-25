import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Alert } from "react-bootstrap";
import styles from "../../styles/GroupEdit.module.css";

const GroupEdit = () => {
  const { id } = useParams(); // Retrieve group ID from URL parameters
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Fetch group details on component mount
    const fetchGroup = async () => {
      try {
        const { data } = await axios.get(`/groups/${id}/`);
        setTitle(data.title);
        setDescription(data.description);
        setGroupSize(data.group_size);
        setTask(data.task);
      } catch (err) {
        console.error("Error fetching group:", err);
      }
    };

    // Fetch tasks for the dropdown
    const fetchTasks = async () => {
      try {
        const { data } = await axios.get("/tasks/");
        setTasks(data);
      } catch (err) {
        console.error("Error fetching tasks:", err);
      }
    };

    fetchGroup();
    fetchTasks();
  }, [id]);

  // Handle cancel button click
  const handleCancel = () => {
    navigate("/groups");
  };

  // Handle save button click
  const handleSave = async (e) => {
    e.preventDefault();

    // Validate form fields
    const newErrors = {};
    if (!title.trim())
      newErrors.title = "Title is required and cannot be blank.";
    if (!description.trim())
      newErrors.description = "Description is required and cannot be blank.";
    if (!groupSize || groupSize <= 0)
      newErrors.groupSize = "Group size must be a positive number.";
    if (!task)
      newErrors.task = "A task must be selected.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const updatedGroup = {
        title,
        description,
        group_size: groupSize,
        task,
      };
      // Send updated group data to the server
      await axios.put(`/groups/${id}/`, updatedGroup, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/groups");
    } catch (err) {
      console.error(
        "Error updating group:",
        err.response ? err.response.data : err.message
      );
    }
  };

  return (
    <div className={styles.Container}>
      <div className={styles.TextBox}>
        <h2>Edit Group</h2>
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
            {errors.title && <Alert variant="danger">{errors.title}</Alert>}
          </div>
          <div className={styles.FormGroup}>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className={styles.Textarea}
            />
            {errors.description && (
              <Alert variant="danger">{errors.description}</Alert>
            )}
          </div>
          <div className={styles.FormGroup}>
            <label htmlFor="groupSize">Group Size:</label>
            <input
              type="number"
              id="groupSize"
              value={groupSize}
              onChange={(e) => setGroupSize(e.target.value)}
              required
              className={styles.Input}
            />
            {errors.groupSize && <Alert variant="danger">{errors.groupSize}</Alert>}
          </div>
          <div className={styles.FormGroup}>
            <label htmlFor="task">Task:</label>
            <select
              id="task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              required
              className={styles.Input}
            >
              <option value="">Select a task</option>
              {tasks.map((task) => (
                <option key={task.id} value={task.id}>
                  {task.title}
                </option>
              ))}
            </select>
            {errors.task && <Alert variant="danger">{errors.task}</Alert>}
          </div>
          <div className={styles.ButtonGroup}>
            <button
              type="submit"
              className={`btn btn-success ${styles.Button}`}
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className={`btn btn-danger ${styles.Button}`}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GroupEdit;
