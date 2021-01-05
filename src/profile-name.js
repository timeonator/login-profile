import React from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

var ProfileName = (props) => {
    
    return (
        <>
        <Form>
        <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        </Form.Row>

        <Form.Row>
        <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        </Form.Row>

        <Form.Row>
        <Form.Group as={Col} controlId="formGridUserName">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="user name" />
        </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
        Submit
        </Button>
        </Form>
        </>
        )};
        export default ProfileName;