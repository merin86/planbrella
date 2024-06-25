import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import styles from '../../styles/GroupCreateForm.module.css';
import { axiosReq } from "../../api/axiosDefaults";

const GroupCreateForm = () => {
  const [tasks, setTasks] = useState([]);  // State to hold the list of tasks for the dropdown
  const [task, setTask] = useState('');  // State to hold the selected task
  const [groupSize, setGroupSize] = useState('');  // State to hold the group size
  const [description, setDescription] = useState('');  // State to hold the group description
  const [errors, setErrors] = useState({});  // State to hold form validation errors
  const navigate = useNavigate();

  useEffect(() => {
    // Function to fetch tasks from the server for the dropdown
    const fetchTasks = async () => {
      try {
        const { data } = await axiosReq.get('/tasks/');
        setTasks(data);
      } catch (err) {
        console.error("Error fetching tasks:", err);
      }
    };
    fetchTasks();  // Call the fetch function on component mount
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    const newErrors = {};
    if (!task) newErrors.task = 'Task is required.';
    if (!groupSize || isNaN(groupSize) || groupSize <= 0) newErrors.groupSize = 'Group size must be a positive number.';
    if (!description.trim()) newErrors.description = 'Description is required and cannot be blank.';

    // If there are validation errors, set errors state and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      // Create new group object
      const newGroup = {
        task,
        group_size: groupSize,
        description,
      };
      // Send POST request to create new group
      await axios.post('/groups/', newGroup, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // Navigate to groups page after successful creation
      navigate('/groups');
    } catch (err) {
      console.error('Error creating group:', err.response ? err.response.data : err.message);
    }
  };

  return (
    <div className={styles.Container}>
      <div className={styles.TextBox}>
        <h2>Create a New Group</h2>
        <form onSubmit={handleSubmit} className={styles.Form}>
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
                <option key={task.id} value={task.id}>{task.title}</option>
              ))}
            </select>
            {errors.task && <Alert variant="danger">{errors.task}</Alert>}
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
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className={styles.Textarea}
            />
            {errors.description && <Alert variant="danger">{errors.description}</Alert>}
          </div>
          <div className={styles.ButtonGroup}>
            <button type="submit" className={`btn btn-success ${styles.Button}`}>
              Create Group
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GroupCreateForm;
