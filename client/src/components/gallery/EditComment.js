import React, { useState } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";

function EditComment() {
  const [smShow, setSmShow] = useState(false);
  return (
    <Modal
      size='sm'
      show={smShow}
      onHide={() => setSmShow(false)}
      aria-labelledby='example-modal-sizes-title-sm'
    >
      <Modal.Header closeButton>
        <Modal.Title id='example-modal-sizes-title-sm'>
          Edit Comment
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormControl />
      </Modal.Body>
      <Button variant='success'>Save</Button>
    </Modal>
  );
}

export default EditComment;
