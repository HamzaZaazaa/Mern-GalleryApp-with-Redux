import axios from "axios";
import React, { useState } from "react";
import { Button, Card, FormControl, Modal } from "react-bootstrap";

function ProfileCard({ userpost, user }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showdel, setShowdel] = useState(false);
  const handledelClose = () => setShowdel(false);
  const handledelShow = () => setShowdel(true);
  const [edit, setEdit] = useState("");

  // Delete post
  const DeletePost = async () => {
    const config = {
      headers: {
        authorized: localStorage.getItem("token"),
      },
    };
    try {
      await axios.delete(`/api/profile/delpost/${userpost._id}`, config);
    } catch (error) {
      console.log(error);
    }
  };
  // edit Poster Title
  const EditTitle = async () => {
    const config = {
      headers: {
        authorized: localStorage.getItem("token"),
      },
    };
    try {
      await axios.put(
        `/api/profile/titleedit/${userpost._id}`,
        { edit },
        config
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant='top' src={`uploads/${userpost.post}`} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            {userpost.posterTitle}
          </Card.Title>
          {/* MODAL BUTTON TO EDIT TEXT */}
          <Button
            variant='outline-warning'
            style={{ width: "100%", marginTop: "10%" }}
            onClick={handleShow}
          >
            Edit Title
          </Button>
          {/* MODAL BUTTON TO DELETE PICTURE */}
          <Button
            variant='outline-danger'
            style={{ width: "100%", marginTop: "10%" }}
            onClick={handledelShow}
          >
            Delete
          </Button>
          {/* MODAL FOR DELETE */}
          <Modal
            show={showdel}
            onHide={handledelClose}
            style={{ marginTop: "10%" }}
          >
            <Modal.Header>
              <Modal.Title>Are you sure you want to delete?</Modal.Title>
            </Modal.Header>
            <Button
              variant='danger'
              onClick={() => {
                DeletePost();
                handledelClose();
              }}
            >
              Confirm
            </Button>
            <Button variant='primary' onClick={handledelClose}>
              Cancel
            </Button>
          </Modal>
          {/* MODAL FOR EDIT */}
          <Modal show={show} onHide={handleClose} style={{ marginTop: "10%" }}>
            <Modal.Header closeButton>
              <Modal.Title>Write your new title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormControl
                placeholder='your new title here'
                onChange={(e) => setEdit(e.target.value)}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleClose}>
                Close
              </Button>
              <Button
                variant='primary'
                onClick={() => {
                  EditTitle();
                  handleClose();
                }}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProfileCard;
