import React from "react";
import { Button, Card } from "react-bootstrap";
import { RiDeleteBin2Fill } from "react-icons/ri";
import {MdOutlineAdminPanelSettings} from "react-icons/md"
import {AiOutlineUser} from "react-icons/ai"
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import axios from "axios";
function UserCard({ user }) {
  return (
    <Card style={{ width: "30%", marginTop: "5%", display: "flex" }}>
      {
        user.role === 1 ? <MdOutlineAdminPanelSettings size={25} /> : <AiOutlineUser size={25} />
      } 
      <Card.Body style={{ textAlign: "center" }}>
        {user.name}
        {user.lastname}
      </Card.Body>
      {
        user.role === 0 ? <Button variant='outline-danger' onClick={DeleteUser}>
        <RiDeleteBin2Fill />
      </Button> : null
      }
    </Card>
  );
}

export default UserCard;
