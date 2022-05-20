import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, FormControl } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
function ImageCard({ getpost }) {
  const [comment, setComment] = useState("");

  const addComment = async () => {
    const data = new FormData();
    data.append("usercomment", comment);
    const config = {
      headers: {
        authorized: localStorage.getItem("token"),
      },
    };
    // Success Notification
    const successNotify = () => {
      toast.success("File Uploaded Successfully", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
    };
    // failed notification
    const failNotify = () => {
      toast.error("Something Went Wrong", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    };
    try {
      await axios.post("/api/comments/addcomment", data, config);
      setComment("");
      successNotify();
    } catch (error) {
      console.log(error);
      failNotify();
    }
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
          <FormControl
            placeholder='Enter a comment'
            onChange={(e) => setComment(e.target.value)}
          ></FormControl>
          <Button
            variant='primary'
            style={{ width: "100%" }}
            onClick={addComment}
          >
            Add
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ImageCard;
