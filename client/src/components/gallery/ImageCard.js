import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, FormControl } from "react-bootstrap";
import { toast, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
function ImageCard({ getpost }) {
  // Toastify notifications
  const notify = () => {
    toast.success("Your comment was added");
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Card.Title style={{ marginLeft: "20%", color: "white" }}>
          {getpost.userId.name}
        </Card.Title>
        <Card.Title style={{ marginLeft: "3%", color: "white" }}>
          {getpost.userId.lastname}
        </Card.Title>
      </div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant='top' src={`uploads/${getpost.post}`} />
        <Button variant='outline-info'>
          <a
            href={`uploads/${getpost.post}`}
            download
            style={{
              textDecoration: "none",
              color: "black",
              fontFamily: "fantasy",
            }}
          >
            Download
          </a>
        </Button>
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            {getpost.posterTitle}
          </Card.Title>
          <Card>
            <Card.Body>USER COMMENT GOES HERE</Card.Body>
          </Card>
          <FormControl placeholder='Enter a comment'></FormControl>
          <Button variant='primary' style={{ width: "100%" }} onClick={notify}>
            Add
          </Button>
          <ToastContainer autoClose={1000} transition={Zoom} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default ImageCard;