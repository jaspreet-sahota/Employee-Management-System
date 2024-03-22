import { FunctionComponent} from "react";
import { useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "./RegisterPage.css";

const Register: FunctionComponent = () => {

  const navigate = useNavigate()
  const handleRegister = () => {
    navigate("/")
  };


  return (
    <div className="register-container">
      <h1>Register</h1>
      <Form className="register-form">
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleRegister}>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
