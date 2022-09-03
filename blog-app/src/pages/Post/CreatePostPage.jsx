import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";

function CreatePost() {
  const [values, setValues] = useState({
    title: "",
    image: "",
    body: "",
    user_id: "",
  });
  const navigate = useNavigate();
  const [cookies] = useCookies(["accessToken", "userId"]);

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8001/blogApp.com/createPost", values, {
        headers: { Authorization: `Bearer ${cookies.accessToken}` },
      })
      .then((res) => {
        if (res.data == "Missing Authorization header") {
          alert("Missing Authorization header");
        } else {
          alert("Create Post Success");
        }
        navigate("/UserDashboard");
      })
      .catch((err) => alert(err));
  };
  return (
    <>
      <Container fluid="sm" id="formApp">
        <h1>CREATE POST</h1>
        <Form onSubmit={handleSubmit}>
          <FormGroup floating>
            <Input
              name="title"
              id="title"
              placeholder="Input Title Here"
              onChange={handleOnChange}
            ></Input>
            <Label>Title</Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              name="image"
              id="image"
              placeholder="Input Image Url Here"
              onChange={handleOnChange}
            ></Input>
            <Label>Image Url</Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              name="body"
              id="body"
              placeholder="Input Body Article Here"
              onChange={handleOnChange}
              type="textarea"
              maxLength={"255"}
              style={{height:"400px"}}
            ></Input>
            <Label>Body Article *Maximal 255 Character</Label>
            <Input
              hidden
              name="user_id"
              values={cookies.userId}
              onLoad={handleOnChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Button color="primary" type="submit">
              Submit
            </Button>
          </FormGroup>
        </Form>
      </Container>
    </>
  );
}

export default CreatePost;
