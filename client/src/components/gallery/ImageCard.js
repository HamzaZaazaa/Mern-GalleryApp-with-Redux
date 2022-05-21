import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, FormControl } from "react-bootstrap";
import axios from "axios";

function ImageCard({ getpost }) {
  const [comment, setComment] = useState({
    usercomment: "",
  });
  const addComment = async () => {
    const config = {
      headers: {
        authorized: localStorage.getItem("token"),
      },
    };
    try {
      await axios.post("/api/comments/addcomment", comment, config);
    } catch (error) {
      console.log(error);
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
          />
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
