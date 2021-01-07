import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Login from './login';
import Register from './register';
import ProfileName from './profile-name';


function ModalWrapper(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        console.log("show:", show);
    }
    var op;
    switch(props.element){
      case 'login':
        op = <Login hide={handleClose} />
        break;
      case 'register':
        op = <Register hide={handleClose} />
        break;
      case 'profile':
        op = <ProfileName hide={handleClose} />
        break;
    }

    return(
        <>
        <Button variant="primary" onClick={handleShow} >
            {props.title}
       </Button>
    
          <Modal
            show={show}
            size="sm"
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {op}
            </Modal.Body>
          </Modal>
        </>
    )};
 
    export default ModalWrapper;