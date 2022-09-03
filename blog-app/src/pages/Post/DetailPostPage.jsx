import { useState, React, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import { Row } from "reactstrap";
import CardTemplate from "../../component/CardPost";
import { useNavigate } from "react-router-dom";


const DetailPost = () => {
  const location = useLocation();
  const { postId } = location.state;
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8001/blogApp.com/post/${postId}`)
      .then((res) => {
        if(!res.data){
          alert("Error")
          navigate("/Home");
        }
        setPosts(res.data);
      })

      .catch((err) => console.error(err));
  }, []);

  const randomColor = ((Math.random() * 0xffffff) << 0).toString(16);
  let title = posts.title;
  let content = posts.body;
  let key = posts.id;
  let image = posts.image;
  let source = "Home";
  let detail = true;
  return (
    <>
      <div>
        <Row id="row">
          <h3>Artikel</h3>
        </Row>
        <Row xs="4" id="row">
          <CardTemplate
            key={key}
            color={"#" + randomColor}
            title={title}
            content={content}
            image = {image}
            source={source}
            detail={detail}
          ></CardTemplate>
        </Row>
        <Row>
          <h1>{title}</h1>
          <img alt="Card cap" src={image} width="auto" />
          <p>{content}</p>
        </Row>
      </div>
    </>
  );
};

export default DetailPost;
