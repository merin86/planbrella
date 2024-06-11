import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { FaCheck } from 'react-icons/fa';
import { Modal, Button } from 'react-bootstrap';
import styles from "../../styles/Tasks.module.css";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";

const Tasks = () => {
  const [tasks, setTasks] = useState([]); // State to hold the list of tasks
  const [showModal, setShowModal] = useState(false); // State to control the visibility of the delete confirmation modal
  const [taskToDelete, setTaskToDelete] = useState(null); // State to hold the task to be deleted

  useEffect(() => {
    // Function to fetch tasks from the server
    const fetchTasks = async () => {
      try {
        const { data } = await axiosRes.get("/tasks/");
        // Sort tasks by due date
        const sortedTasks = data.sort(
          (a, b) => new Date(a.due_date) - new Date(b.due_date)
        );
        setTasks(sortedTasks); // Update state with sorted tasks
      } catch (err) {
        // console.log(err);
      }
    };
    fetchTasks(); // Call the fetch function on component mount
  }, []);

  // Function to handle task deletion
  const handleDelete = async () => {
    try {
      await axios.delete(`/tasks/${taskToDelete.id}/`);
      // Remove the deleted task from the state
      setTasks(tasks.filter(task => task.id !== taskToDelete.id));
      setShowModal(false); // Close the delete confirmation modal
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  // Function to open the delete confirmation modal
  const openModal = (task) => {
    setTaskToDelete(task); // Set the task to be deleted
    setShowModal(true); // Show the delete confirmation modal
  };

  // Function to close the delete confirmation modal
  const closeModal = () => {
    setShowModal(false);
    setTaskToDelete(null); // Clear the task to be deleted
  };

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
                <div className={task.is_overdue ? `${styles.OverdueDate}` : ''}>
                  {new Date(task.due_date).toLocaleDateString()} {task.is_overdue && <span className={styles.OverdueText}>Overdue</span>}
                </div>
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
                  <button
                    className={`btn btn-danger ${styles.TaskButton}`}
                    onClick={() => openModal(task)}
                  >
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

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this task? Removing a task is permanent.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Tasks;
