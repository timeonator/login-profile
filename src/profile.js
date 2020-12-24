import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

var Profile = (props) => {
    
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
        <Form.Group controlId="formGridUserName">
        <Form.Label>User Name</Form.Label>
        <Form.Control placeholder="user name" />
        </Form.Group>
        </Form.Row>

        <Form.Row>
        <Form.Group as={Col} controlId="formGridFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control placeholder="Your First Name" />
        </Form.Group>
        </Form.Row>

        <Form.Row>
        <Form.Group as={Col} controlId="formGridLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control placeholder="Your Last Name" />
        </Form.Group>
        </Form.Row>

        <Form.Row>
        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
            </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
        </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
        Submit
        </Button>
        </Form>
        </>
)};

export default Profile;