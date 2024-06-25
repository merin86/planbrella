import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import styles from "../../styles/GroupDetail.module.css";

const GroupDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [group, setGroup] = useState(null);
  const [showGroupDeleteModal, setShowGroupDeleteModal] = useState(false);

  // Fetch group details on component mount
  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const { data } = await axios.get(`/groups/${id}/`);
        setGroup(data);
      } catch (err) {
        console.error("Error fetching group:", err);
      }
    };

    fetchGroup();
  }, [id]);

  // Navigate to the group edit page
  const handleEdit = () => {
    navigate(`/groups/${id}/edit`);
  };

  // Open the group delete confirmation modal
  const openGroupDeleteModal = () => {
    setShowGroupDeleteModal(true);
  };

  // Close the group delete confirmation modal
  const closeGroupDeleteModal = () => {
    setShowGroupDeleteModal(false);
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

  return (
    <div className={styles.Container}>
      <div className={styles.TextBox}>
        <div className={styles.Title}>{group?.name}</div>
        <div className={styles.Description}>{group?.description}</div>
        <hr className={styles.Divider} />
        <div className={styles.GroupSize}>
          Group Size: {group?.size}
        </div>
        <div className={styles.TaskLink}>
          Task: {group?.task.title}
        </div>
        <div className={styles.ButtonsContainer}>
          <button
            onClick={handleEdit}
            className={`btn btn-warning ${styles.Button}`}
          >
            Edit
          </button>
          <button
            onClick={openGroupDeleteModal}
            className={`btn btn-danger ${styles.Button}`}
          >
            Delete
          </button>
        </div>
      </div>

      <Modal show={showGroupDeleteModal} onHide={closeGroupDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this group? Removing a group is permanent.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeGroupDeleteModal}>
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
