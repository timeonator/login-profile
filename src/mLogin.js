import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Logon from './logon';

function MLogin() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose} size = 'sm'>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Logon hide={handleClose}/>
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
  export default MLogin;