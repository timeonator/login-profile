import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function ModalWrapper(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        console.log("show:", show);
    }

    return(
        <>
        <Button variant="primary" onClick={handleShow}>
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
                {props.element}
            </Modal.Body>
          </Modal>
        </>
    )};
 
    export default ModalWrapper;