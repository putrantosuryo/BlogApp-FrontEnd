import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button,Container } from "reactstrap";

function Register(props) {
  const [values, setValues] = useState({
    fullname: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8001/blogApp.com/register", values)
      .then((res) => {
        if (res.data !== "Username Already Exist!") {
          alert("Register Success");
          navigate("/Login");
        } else {
          alert(res.data);
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <>

        <Container fluid="sm" id="formApp">
        <h1> REGISTRATION PAGE </h1>
        <Form onSubmit={handleSubmit}>
          <FormGroup floating>
            <Input
              name="fullname"
              id="fullname"
              placeholder="Fullname"
              onChange={handleOnChange}
            ></Input>
            <Label>fullname</Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              name="username"
              id="username"
              placeholder="Username"
              onChange={handleOnChange}
            ></Input>
            <Label>username</Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              name="password"
              id="password"
              placeholder="Password"
              type="text"
              onChange={handleOnChange}
            ></Input>
            <Label>pasword</Label>
          </FormGroup>
          <FormGroup>
            <Button color="primary" type="submit">Sign Up</Button>
          </FormGroup>
        </Form>
        </Container>

    </>
  );
}

export default Register;
