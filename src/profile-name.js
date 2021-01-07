import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

var ProfileName = (props) => {
    const [profile, setProfile] = useState({
        email: "",
        password: "",
        username: ""
      });
    
      const handleInputChange = (event) => {
        setProfile((prevProps) => ({
          ...prevProps,
          [event.target.name]: event.target.value
        }));
      };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(profile);
        props.hide();
      };   
    return (
        <>
        <Form onSubmit={handleSubmit}>
        <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
                type="email" 
                name="email"
                placeholder="Enter email"
                onChange = {handleInputChange} 
             />
        </Form.Group>
        </Form.Row>

        <Form.Row>
        <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
                type="password" 
                placeholder="Password"
                size='sm' 
                name="password"
                onChange = {handleInputChange}                        
            />
        </Form.Group>
        </Form.Row>

        <Form.Row>
        <Form.Group as={Col} controlId="formGridUserName">
        <Form.Label>User Name</Form.Label>
        <Form.Control 
            type="text" 
            size='sm'
            name="username"
            placeholder="Enter username"
            onChange = {handleInputChange}        
        />
        </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit" onSubmit={handleSubmit}>
        Submit
        </Button>
        </Form>
        </>
        )};
        export default ProfileName;