import React from "react";
import { Button } from "react-bootstrap";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import axios from "axios";
import { useSelector } from "react-redux";
function CommentBody({ comment }) {
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
    </div>
  );
}

export default CommentBody;
