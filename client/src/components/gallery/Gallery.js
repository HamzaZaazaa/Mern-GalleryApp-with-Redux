import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import { Button, Modal } from "react-bootstrap";
import "./gallery.css";
import { Axios } from "axios";

const Gallery = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState({
    posterTitle: "",
  });
  const [uploadpic, setUploadpic] = useState(null);

  // input function
  const handleTitle = (e) => {
    setTitle({ ...title, [e.target.name]: e.target.value });
  };
  const UploadingPic = async () => {
    const data = new FormData();
    data.append("myPost", uploadpic);
    const config = {
      headers: {
        authorized: localStorage.getItem("token"),
      },
    };
    try {
      const res = await Axios.post("/api/post/gallery", data, config);
    } catch (error) {
      console.log(error);
    }
  };
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
            <input
              type='file'
              size='60'
              name='post'
              onChange={(e) => setUploadpic(e.target.files[0])}
            />
          </label>
          <input
            type='text'
            placeholder='Picture Title'
            className='modalinput'
            name='posterTitle'
            onChange={handleTitle}
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
