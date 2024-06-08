import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import CommentCreateForm from "../comments/CommentCreateForm";
import styles from "../../styles/TaskDetail.module.css";

const TaskDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [comments, setComments] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

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

  const fetchComments = async () => {
    try {
      const { data } = await axios.get(`/comments/?task=${id}&page=${page}`);
      setComments((prevComments) => [...prevComments, ...data.results]);
      if (!data.next) {
        setHasMore(false);
      }
      setPage((prevPage) => prevPage + 1);
    } catch (err) {
      console.error("Error fetching comments:", err);
    }
  };

  const handleEdit = () => {
    navigate(`/tasks/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/tasks/${id}/`);
      navigate("/tasks");
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  const handleCommentAdded = (newComment) => {
    setComments((prevComments) => [newComment, ...prevComments]);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.TextBox}>
        <div className={styles.Title}>{task?.title}</div>
        <div className={styles.Description}>{task?.description}</div>
        <hr className={styles.Divider} />
        <div className={styles.DueDate}>
          Due Date: {new Date(task?.due_date).toLocaleDateString()}
        </div>
        <div className={styles.ButtonsContainer}>
          <button
            onClick={handleEdit}
            className={`btn btn-warning ${styles.Button}`}
          >
            Edit
          </button>
          <button
            onClick={() => setShowModal(true)}
            className={`btn btn-danger ${styles.Button}`}
          >
            Delete
          </button>
        </div>
      </div>

      <div className={styles.CommentsSection}>
        <CommentCreateForm taskId={id} onCommentAdded={handleCommentAdded} />
        <InfiniteScroll
          dataLength={comments.length}
          next={fetchComments}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={<p style={{ textAlign: "center" }}><b>No more comments</b></p>}
        >
          {comments.map((comment) => (
            <div key={comment.id} className={styles.Comment}>
              <div className={styles.CommentOwner}>{comment.owner}</div>
              <div className={styles.CommentText}>{comment.text}</div>
              <div className={styles.CommentDate}>
                {new Date(comment.created_at).toLocaleDateString()}
              </div>
            </div>
          ))}
        </InfiniteScroll>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this task? Removing a task is permanent.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
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

export default TaskDetail;
