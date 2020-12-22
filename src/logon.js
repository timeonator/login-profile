import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import "./styles.css";

export default function Logon() {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(login);
  };

  return (
    <Form onSubmit={handleSubmit}  >
    <Form.Group controlId="formBasicEmail" size='sm' >
      <Form.Label>Email address</Form.Label>
      <Form.Control 
        size='sm'
        type="email" 
        name="email"
        placeholder="Enter email"
        onChange = {handleInputChange}        
        />
      <Form.Text lassName="text-muted" size='sm'>
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Form.Group controlId="formBasicPassword" size='sm' >
      <Form.Label>Password</Form.Label>
      <Form.Control 
        type="password"
        name="password"
        placeholder="Password"
        onChange = {handleInputChange}
    />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit" >
      Submit
    </Button>
  </Form>
  );

}