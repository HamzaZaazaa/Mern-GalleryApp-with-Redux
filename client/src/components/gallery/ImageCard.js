import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, FormControl } from "react-bootstrap";
import { useSelector } from "react-redux";
function ImageCard() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant='top' src='holder.js/100px180' />
        <Card.Body>
          <Card.Title>IMAGE Title</Card.Title>
          <Card>
            <Card.Body>USER COMMENT GOES HERE</Card.Body>
          </Card>
          <FormControl placeholder='Enter a comment'></FormControl>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ImageCard;
