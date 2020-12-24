import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Profile from './profile';;

function MProfile() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        console.log("show:", show);
    }

    return(
        <>
        <Button variant="primary" onClick={handleShow}>
            Edit Profile
       </Button>
    
          <Modal
            show={show}
            size="sm"
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Profile />
            </Modal.Body>
          </Modal>
        </>
    )};
 
    export default MProfile;