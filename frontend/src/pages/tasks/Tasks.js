import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { FaCheck } from 'react-icons/fa';
import { Modal, Button } from 'react-bootstrap'; // Lägg till dessa importeringar
import styles from "../../styles/Tasks.module.css";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

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

  const handleDelete = async () => {
    try {
      await axios.delete(`/tasks/${taskToDelete.id}/`);
      setTasks(tasks.filter(task => task.id !== taskToDelete.id));
      setShowModal(false);
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  const openModal = (task) => {
    setTaskToDelete(task);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setTaskToDelete(null);
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

      {/* Modal för bekräftelse */}
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
