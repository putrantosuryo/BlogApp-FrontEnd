import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

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
      <div>
        <h1>CREATE POST</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            id="title"
            placeholder="Input Title Here"
            onChange={handleOnChange}
          ></input>
          <br />
          <input
            name="image"
            id="image"
            placeholder="Input Image Url Here"
            onChange={handleOnChange}
          ></input>
          <br />
          <input
            name="body"
            id="body"
            placeholder="Input Body Article Here"
            onChange={handleOnChange}
          ></input>
          <input hidden name="user_id" values={cookies.userId} onLoad={handleOnChange}></input>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default CreatePost;
