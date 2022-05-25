import React from "react";
import { Button, Card } from "react-bootstrap";
import { RiDeleteBin2Fill } from "react-icons/ri";
function UserCard({ user }) {
  return (
    <Card style={{ width: "30%", marginTop: "5%", display: "flex" }}>
      <Card.Body style={{ textAlign: "center" }}>
        {user.name}
        {user.lastname}
      </Card.Body>
      <Button variant='outline-danger'>
        <RiDeleteBin2Fill />
      </Button>
    </Card>
  );
}

export default UserCard;
