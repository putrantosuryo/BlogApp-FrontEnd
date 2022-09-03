import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <div>
        <h1> REGISTRATION PAGE </h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>fullname</label>
          <input
            name="fullname"
            id="fullname"
            placeholder="Fullname"
            onChange={handleOnChange}
          ></input>
          <br />
          <label>username</label>
          <input
            name="username"
            id="username"
            placeholder="Username"
            onChange={handleOnChange}
          ></input>
          <br />
          <label>pasword</label>
          <input
            name="password"
            id="password"
            placeholder="Password"
            type="text"
            onChange={handleOnChange}
          ></input>
          <br />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
}

export default Register;
