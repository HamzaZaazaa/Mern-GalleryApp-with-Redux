import React, { useEffect, useState } from "react";
import { Button, Card, FormControl } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import "./imagecard.css";

import CommentBody from "./CommentBody";
function ImageCard({ getpost }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const addComment = async () => {
    const config = {
      headers: {
        authorized: localStorage.getItem("token"),
      },
    };
    // success toast
    const succNotify = () => {
      toast.success("Comment Added", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    };
    // fail toast
    const failNotify = () => {
      toast.error("something went wrong", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    };
    try {
      await axios.post(
        `/api/comments/addcomment/${getpost._id}`,
        { comment },
        config
      );
      succNotify();
    } catch (error) {
      console.log(error);
      failNotify();
    }
  };

  // AXIOS ERROR WITH WEBPACK
  useEffect(() => {
    axios
      .get(`/api/comments/getcomments/${getpost._id}`)
      .then((res) => setComments(res.data.Found))
      .catch((err) => console.log(err));
  }, []);
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
            {/* COMMENTS */}
            <Card.Body>
              {comments.map((comment) => (
                <CommentBody
                  comment={comment}
                  getpost={getpost}
                  key={comment._id}
                />
              ))}
            </Card.Body>
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
