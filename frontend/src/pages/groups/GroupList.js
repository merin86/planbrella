import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { Modal, Button } from 'react-bootstrap';
import styles from "../../styles/GroupList.module.css";
import { axiosRes } from "../../api/axiosDefaults";

const GroupList = () => {
  const [groups, setGroups] = useState([]);  // State to hold the list of groups
  const [showModal, setShowModal] = useState(false);  // State to control the visibility of the delete confirmation modal
  const [groupToDelete, setGroupToDelete] = useState(null);  // State to hold the group to be deleted

  useEffect(() => {
    // Function to fetch groups from the server
    const fetchGroups = async () => {
      try {
        const { data } = await axiosRes.get("/groups/");
        setGroups(data);  // Update state with the fetched groups
      } catch (err) {
        console.error(err);
      }
    };
    fetchGroups();  // Call the fetch function on component mount
  }, []);

  // Function to handle group deletion
  const handleDelete = async () => {
    try {
      await axios.delete(`/groups/${groupToDelete.id}/`);
      // Remove the deleted group from the state
      setGroups(groups.filter(group => group.id !== groupToDelete.id));
      setShowModal(false);  // Close the delete confirmation modal
    } catch (err) {
      console.error('Error deleting group:', err);
    }
  };

  // Function to open the delete confirmation modal
  const openModal = (group) => {
    setGroupToDelete(group);  // Set the group to be deleted
    setShowModal(true);  // Show the delete confirmation modal
  };

  // Function to close the delete confirmation modal
  const closeModal = () => {
    setShowModal(false);
    setGroupToDelete(null);  // Clear the group to be deleted
  };

  return (
    <div className={styles.Container}>
      <div className={styles.TextBox}>
        <div className={styles.ScrollableContent}>
          <div className={styles.HeaderRow}>
            <div>Task</div>
            <div>Group Size</div>
            <div>Description</div>
            <div>View Group</div>
            <div>Edit Group</div>
            <div>Delete Group</div>
          </div>
          {groups.length > 0 ? (
            groups.map((group) => (
              <div key={group.id} className={styles.GroupItem}>
                <div>{group.task.title}</div>
                <div>{group.group_size}</div>
                <div>{group.description}</div>
                <div>
                  <Link
                    to={`/groups/${group.id}`}
                    className={`btn btn-primary ${styles.GroupButton}`}
                  >
                    View
                  </Link>
                </div>
                <div>
                  <Link
                    to={`/groups/${group.id}/edit`}
                    className={`btn btn-warning ${styles.GroupButton}`}
                  >
                    Edit
                  </Link>
                </div>
                <div>
                  <button
                    className={`btn btn-danger ${styles.GroupButton}`}
                    onClick={() => openModal(group)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No groups available.</p>
          )}
        </div>
        <div className={styles.CreateButton}>
          <NavLink to="/groups/create" className="btn btn-success">
            Create Group
          </NavLink>
        </div>
      </div>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this group? Removing a group is permanent.
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

export default GroupList;
