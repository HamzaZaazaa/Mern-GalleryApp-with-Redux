import React, { useState } from "react";
import { Button, Card, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { EditUser } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
function EditProfile() {
  const [edituser, setEdituser] = useState({
    name: "",
    lastname: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setEdituser({ ...edituser, [e.target.name]: e.target.value });
  };
  const config = {
    headers: {
      authorized: localStorage.getItem("token"),
    },
  };
  const handleSubmit = () => {
    dispatch(EditUser(edituser, config));
  };
  return (
    <Card style={{ width: "30rem", marginLeft: "30%", marginTop: "20%" }}>
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>EDIT YOUR NAME</Card.Title>

        <Card.Text>
          <FormControl
            placeholder='Your name here'
            name='name'
            onChange={handleChange}
          />
          <FormControl
            placeholder='Your lastName here'
            name='lastname'
            onChange={handleChange}
          />
        </Card.Text>
        <Button
          variant='outline-success'
          style={{ width: "100%" }}
          onClick={handleSubmit}
        >
          Save Changes
        </Button>
      </Card.Body>
    </Card>
  );
}

export default EditProfile;
