import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const SERVER_PORT = 3001;
// import "./styles.css";

export default function Login(props) {

  const [profile, setProfile] = useState({
        id: null,
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        password:""
    });
  const handleInputChange = (event) => {
    setProfile((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }));
  };


  const handleSubmit = (event) => {
    console.log("login handleSubmit: ", profile);
    const r ='http://localhost:'+3001+'/login';
    console.log("starting at ?:", r);
    fetch(r, {
        method: 'post',
//        mode: 'cors',
//        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(profile)
    })
    .then (response => {
        console.log("Response Data: ", response.json());
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