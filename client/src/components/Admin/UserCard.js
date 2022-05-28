import React from "react";
import { Button, Card } from "react-bootstrap";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
function UserCard({ user }) {
  const deleteusers = async () => {
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
    // Refresh browser
    window.location.reload();
    try {
      await axios.delete(`/api/admin/admindelete/${user._id}`, config);
      successNotify();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card style={{ width: "15%", marginTop: "5%", display: "flex" }}>
      {user.role === 1 ? (
        <MdOutlineAdminPanelSettings size={25} />
      ) : (
        <AiOutlineUser size={25} />
      )}
      <Card.Body style={{ textAlign: "center" }}>
        {user.name}
        {user.lastname}
      </Card.Body>
      {user.role === 0 ? (
        <Button variant='outline-danger' onClick={deleteusers}>
          <RiDeleteBin2Fill />
        </Button>
      ) : null}
    </Card>
  );
}

export default UserCard;
