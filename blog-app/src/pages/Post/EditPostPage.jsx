import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";

function EditPost() {
  const location = useLocation();
  const { tempTitle, tempImage, tempContent, tempId } = location.state;
  const [values, setValues] = useState({
    title: tempTitle,
    image: tempImage,
    body: tempContent,
  });
  const navigate = useNavigate();
  const [cookies] = useCookies(["accessToken", "userId"]);

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8001/blogApp.com/editPost/${tempId}`, values, {
        headers: { Authorization: `Bearer ${cookies.accessToken}` },
      })
      .then((res) => {
        if (res.data == "Update Success") {
            alert("Edit Data Success")
        }else{
            alert("Failed Edit Data")
        }
        navigate("/UserDashboard");
      })
      .catch((err) => alert(err));
  };
  return (
    <>
      <div>
        <h1>EDIT POST</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            id="title"
            placeholder="Input Title Here"
            value={values.title}
            onChange={handleOnChange}
          ></input>
          <br />
          <input
            name="image"
            id="image"
            placeholder="Input Image Url Here"
            value={values.image}
            onChange={handleOnChange}
          ></input>
          <br />
          <input
            name="body"
            id="body"
            placeholder="Input Body Article Here"
            value={values.body}
            onChange={handleOnChange}
          ></input>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default EditPost;
