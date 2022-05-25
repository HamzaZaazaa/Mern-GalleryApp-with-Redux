import React from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
function AdminCards({ post }) {
  // Delete post
  const deletePost = async () => {
    const config = {
      headers: {
        authorized: localStorage.getItem("token"),
      },
    };
    const delNotify = () => {
      toast.success("Post deleted Successfully", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    };
    try {
      await axios.delete(`/api/admin/admindel/${post._id}`, config);
      delNotify();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant='top' src={`/uploads/${post.post}`} />
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>
          {post.posterTitle}
        </Card.Title>
        <Button variant='danger' style={{ width: "100%" }} onClick={deletePost}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default AdminCards;
