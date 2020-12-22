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
    <Form onSubmit={handleSubmit} className="form-control">
    <Form.Group controlId="formBasicEmail" >
      <Form.Label>Email address</Form.Label>
      <Form.Control 
        type="email" 
        name="email"
        placeholder="Enter email"
        onChange = {handleInputChange}        
        />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Form.Group controlId="formBasicPassword" >
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
//     <div className="Login">
//       <form onSubmit={handleSubmit}>
//         <div className="form-control">
//           <label>Email</label>
//           <input
//             type="text"
//             name="email"
//             value={login.email}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-control">
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={login.password}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-control">
//           <label></label>
//           <button type="submit">Login</button>
//         </div>
//       </form>
//     </div>
  );
}