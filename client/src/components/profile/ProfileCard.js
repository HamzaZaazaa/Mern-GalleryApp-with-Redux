import React, { useState } from 'react'
import { Button, Card, FormControl, Modal } from 'react-bootstrap'

function ProfileCard({userpost}) {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showdel, setShowdel] = useState(false);
  const handledelClose = () => setShowdel(false);
  const handledelShow = () => setShowdel(true);

  return (
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={`uploads/${userpost.post}`} />
    <Card.Body>
      <Card.Title style={{textAlign : "center"}}>{userpost.posterTitle}</Card.Title>
      {/* MODAL TO EDIT TEXT */}
      <Button variant="outline-warning" style={{width:'100%', marginTop:"10%"}} onClick={handleShow}>
        Edit Title
      </Button>
      {/* MODAL TO DELETE PICTURE */}
      <Button variant="outline-danger" style={{width:'100%', marginTop:"10%"}} onClick={handledelShow}>
        Delete 
      </Button>
      <Modal show={showdel} onHide={handledelClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to delete</Modal.Title>
        </Modal.Header>
        <Button variant="danger" onClick={handledelClose}>
            Confirm
          </Button>
        <Button variant="primary" onClick={handledelClose}>
            Cancel
          </Button>
      </Modal>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Write your new title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormControl placeholder='your new title here'></FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Card.Body>
  </Card>
  </div>
  )
}

export default ProfileCard