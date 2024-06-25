import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import styles from "../../styles/GroupDetail.module.css";

const GroupDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [group, setGroup] = useState(null);
  const [taskTitle, setTaskTitle] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Fetch group details on component mount
  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const { data } = await axios.get(`/groups/${id}/`);
        setGroup(data);
        
        // Fetch the task title
        const taskRes = await axios.get(`/tasks/${data.task}/`);
        setTaskTitle(taskRes.data.title);
      } catch (err) {
        console.error("Error fetching group:", err);
      }
    };

    fetchGroup();
  }, [id]);

  // Open the group delete confirmation modal
  const openDeleteModal = () => {
    setShowDeleteModal(true);
  };

  // Close the group delete confirmation modal
  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  // Handle group deletion
  const handleGroupDelete = async () => {
    try {
      await axios.delete(`/groups/${id}/`);
      navigate("/groups");
    } catch (err) {
      console.error("Error deleting group:", err);
    }
  };

  // Navigate to the group edit page
  const handleEdit = () => {
    navigate(`/groups/${id}/edit`);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.TextBox}>
        {group && (
          <>
            <div className={styles.TaskTitle}>
              Task: {taskTitle}
            </div>
            <hr className={styles.Divider} />
            <div className={styles.GroupSize}>
              Group Size: {group.group_size}
            </div>
            <div className={styles.Description}>
              Description: {group.description}
            </div>
            <div className={styles.ButtonsContainer}>
              <button
                onClick={handleEdit}
                className={`btn btn-warning ${styles.Button}`}
              >
                Edit
              </button>
              <button
                onClick={openDeleteModal}
                className={`btn btn-danger ${styles.Button}`}
              >
                Delete
              </button>
            </div>
          </>
        )}
      </div>

      <Modal show={showDeleteModal} onHide={closeDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this group? Removing a group is permanent.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDeleteModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleGroupDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default GroupDetail;
