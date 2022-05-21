import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import { Button, FormControl, Modal } from "react-bootstrap";
import "./gallery.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

const Gallery = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [uploadpic, setUploadpic] = useState(null);
  const [getposts, setGetposts] = useState([]);
  const [postsearch, setPostsearch] = useState("");

  // Uploading a new picture with a title
  const UploadingPic = async () => {
    const formData = new FormData();
    formData.append("myPost", uploadpic);
    formData.append("posterTitle", title);
    const config = {
      headers: {
        authorized: localStorage.getItem("token"),
      },
    };
    // Failed notification
    const failNotify = () => {
      toast.error("Something Went Wrong", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    };
    // Success Notification
    const successNotify = () => {
      toast.success("File Uploaded Successfully", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
    };
    try {
      await axios.post("/api/post/gallery", formData, config);
      setTitle("");
      successNotify();
      handleClose();
    } catch (error) {
      failNotify();
    }
  };
  // get all posts
  useEffect(() => {
    axios
      .get("/api/post/getall")
      .then((res) => setGetposts(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Setting up title search
  const posts = getposts.filter((getpost) => {
    return getpost.posterTitle
      .toLowerCase()
      .includes(postsearch.toLowerCase().trim());
  });
  return (
    <div>
      <Button variant='info' onClick={handleShow} className='Modalbtn'>
        Upload A Picture
      </Button>
      <Modal show={show} onHide={handleClose} style={{ marginTop: "10%" }}>
        <Modal.Header closeButton>
          <Modal.Title className='modalTitle'>
            SHOW THE WORLD YOUR ART
          </Modal.Title>
        </Modal.Header>
        {/* File and text inputs */}
        <Modal.Body className='modalbody'>
          <label className='uploadingapic'>
            Choose file
            <input
              type='file'
              size='60'
              name='post'
              onChange={(e) =>
                setUploadpic(e.target.files[0], e.preventDefault())
              }
              required
            />
          </label>
          <input
            type='text'
            placeholder='Picture Title'
            className='modalinput'
            name='posterTitle'
            onChange={(e) => setTitle(e.target.value)}
            required
          ></input>
        </Modal.Body>
        {/* Uploading and cancel Buttons */}
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='primary' onClick={UploadingPic}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Searching */}
      <FormControl
        type='search'
        className='searchinput'
        placeholder='Search!'
        onChange={(e) => setPostsearch(e.target.value)}
      />
      <div className='imgcontainer'>
        {posts.map((getpost) => (
          <ImageCard getpost={getpost} key={getpost._id} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
