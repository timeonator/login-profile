import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const SERVER_PORT = 3002;
// import "./styles.css";

export default function Logon(props) {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (event) => {
    setLogin((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }));
  };

  const [profile, setProfile] = useState({
    id: null,
        first_name: "",
        last_name: "",
        email: "",
        username: ""
    });
  const handleSubmit = (event) => {
    const r ='http://localhost:'+SERVER_PORT+'/user/'+login.email;
    console.log("what the matter here?:", r);
    fetch(r, {mode: 'cors' })
      .then (response => response.json())
    .then (data => {
        console.log("Response Data: ", JSON.stringify(data));
    })
      .catch((error) => {
          console.error('Error:', error);

      });

  event.preventDefault();
  props.hide();
};

  return (
    <Form onSubmit={handleSubmit}  >
    <Form.Group controlId="formBasicEmail" size='sm' >
      <Form.Label>Email address</Form.Label>
      <Form.Control 
        required
        size='sm'
        type="email" 
        name="email"
        placeholder="Enter email"
        onChange = {handleInputChange}        
        />
      <Form.Text size='sm'>
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Form.Group controlId="formBasicPassword" size='sm' >
      <Form.Label>Password</Form.Label>
      <Form.Control 
        required
        type="password"
        name="password"
        placeholder="Password"
        onChange = {handleInputChange}
    />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit" onSubmit={handleSubmit}>
      Login
    </Button>
  </Form>
  );

}