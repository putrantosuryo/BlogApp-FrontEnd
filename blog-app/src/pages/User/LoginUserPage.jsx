import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button,Container } from "reactstrap";

function Login(props) {
  const [values, setValues] = useState({ username: "" });
  const [cookies, setCookies] = useCookies(["accessToken", "userId", "email"]);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8001/blogApp.com/login", values)
      .then((res) => {
        const { accessToken, userId, username } = res.data;
        setCookies("accessToken", accessToken, { maxAge: 60000 });
        setCookies("userId", userId, { maxAge: 60000 });
        setCookies("username", username, { maxAge: 60000 });
        navigate("/UserDashboard");
      })
      .catch((err) => alert(" Wrong Username or Password !"));
  };

  return (
    <>
    <Container fluid="sm" id="formApp">
    <div>
        <h1> LOGIN PAGE </h1>
      </div>
      <div>
        <Form onSubmit={handleSubmit}>
          <FormGroup floating>
            <Input
              name="username"
              id="username"
              placeholder="Username"
              value={values.username}
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
            <Label>password</Label>
          </FormGroup>
          <FormGroup>
          <Button color="primary" type="submit">Login</Button>
          </FormGroup>
        </Form>
      </div>
    </Container>
      
    </>
  );
}

export default Login;
