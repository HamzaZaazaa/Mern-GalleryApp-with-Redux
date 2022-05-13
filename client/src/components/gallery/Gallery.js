import React, { useState } from "react";
import ImageCard from "./ImageCard";
import { Button, FormControl, Modal } from "react-bootstrap";
import "./gallery.css";

const Gallery = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant='info' onClick={handleShow} className='Modalbtn'>
        Upload A Picture
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>SHOW THE WORLD YOUR ART</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalbody'>
          <label className='uploadingapic'>
            Choose picture
            <input type='file' size='60' />
          </label>
          <input
            type='text'
            placeholder='Picture Title'
            className='modalinput'
          ></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ImageCard />
    </div>
  );
};

export default Gallery;
