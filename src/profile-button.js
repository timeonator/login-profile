import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Profile from './profile';
import Login from './login';

var profile = {
    email:"johntreehorn@gmail.com",
    passwd:"klkakjakd",
    username:"john",
    online: false
};


var ProfileButton = (props) => {
  var email = props.email;
  var password = props.passsword;
  var username = "timeonator";
  var online = false;

  const [show, setShow] = useState(false);  
  const handleClose = () => setShow(false);
  const handleShow = () => {
      setShow(true);
      console.log("show:", show);
  }

  return(
    <>
    <Button variant="primary" onClick={handleShow}>
        {online ? username : "Login"}
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
          {online ? <Profile hide={handleClose} /> : <Login hide={handleClose} />}
      </Modal.Body>
    </Modal>
    </>
  );
};
export default ProfileButton;