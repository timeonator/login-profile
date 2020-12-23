import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Register from './register';

function MRegister() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Register Demo
        </Button>
  
        <Modal show={show} onHide={handleClose} size = 'sm'>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Register hide={handleClose}/>
          </Modal.Body>
{          // <Modal.Footer>
          //   <Button variant="secondary" onClick={handleClose}>
          //     Close
          //   </Button>
          // </Modal.Footer>
}
        </Modal>
      </>
    );
  }
  export default MRegister;