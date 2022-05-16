import React, { useState } from "react";
import ImageCard from "./ImageCard";
import { Button, Modal } from "react-bootstrap";
import "./gallery.css";
import  axios  from "axios";

const Gallery = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [uploadpic, setUploadpic] = useState(null);

  const UploadingPic = async () => {
    const formData = new FormData();
    formData.append("myPost", uploadpic);
    formData.append('posterTitle', title)
    const config = {
      headers: {
        authorized: localStorage.getItem("token"),
      },
    };
    try {
      await axios.post("/api/post/gallery", formData, config);
      alert("Your post was uploaded")
      setTitle('')
      handleClose()
    } catch (error) {
      console.log(error);
      alert("Error uploading file")
    }
  };
  return (
    <div>
      <Button variant='info' onClick={handleShow} className='Modalbtn'>
        Upload A Picture
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modalTitle">SHOW THE WORLD YOUR ART</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalbody'>
          <label className='uploadingapic'>
            Choose file
            <input
              type='file'
              size='60'
              name='post'
              onChange={(e) => setUploadpic(e.target.files[0], e.preventDefault())}
              required
            />
          </label>
          <input
            type='text'
            placeholder='Picture Title'
            className='modalinput'
            name='posterTitle'
            onChange={e => setTitle(e.target.value)}
            required
          ></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='primary' onClick={UploadingPic}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ImageCard />
    </div>
  );
};

export default Gallery;
