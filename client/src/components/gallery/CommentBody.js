import React, { useState } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { MdModeEdit } from "react-icons/md";

function CommentBody({ comment }) {
  const [smShow, setSmShow] = useState(false);
  const user = useSelector((state) => state.authReducer.user);
  const Deletecomment = () => {
    const config = {
      headers: {
        authorized: localStorage.getItem("token"),
      },
    };
    // success toast
    const succNotify = () => {
      toast.success("Comment Deleted", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    };
    try {
      axios.delete(`/api/comments/deletecomment/${comment._id}`, config);
      succNotify();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <div className='commenteduser'>
          <p>{comment.userId.name}</p>
          <p>{comment.userId.lastname}</p>
        </div>
        <div className='commentandicon'>
          <p className='comments'>{comment.usercomment}</p>
          {comment.userId._id === user._id ? (
            <>
              <Button
                variant='outline-danger'
                id='deleteicon'
                onClick={Deletecomment}
                style={{
                  marginLeft: "75%",
                  height: "32px",
                }}
              >
                <RiDeleteBin2Fill style={{ marginBottom: "10px" }} />
              </Button>
              <Button
                variant='outline-info'
                style={{
                  width: "45px",
                  height: "31px",
                  position: "absolute",
                  marginLeft: "55%",
                }}
                onClick={() => setSmShow(true)}
                className='me-2'
              >
                <MdModeEdit style={{ marginBottom: "10px" }} />
              </Button>
            </>
          ) : null}
          {user.role === 1 ? (
            <Button
              variant='outline-danger'
              id='deleteicon'
              onClick={Deletecomment}
              style={{
                marginLeft: "70%",
                height: "32px",
              }}
            >
              <RiDeleteBin2Fill style={{ marginBottom: "10px" }} />
            </Button>
          ) : null}
        </div>
      </div>
      <Modal
        size='sm'
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby='example-modal-sizes-title-sm'
        style={{ marginTop: "10%" }}
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-modal-sizes-title-sm'>
            Edit Comment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl placeholder='Enter your new comment' />
        </Modal.Body>
        <Button variant='success'>Save</Button>
      </Modal>
    </div>
  );
}

export default CommentBody;
