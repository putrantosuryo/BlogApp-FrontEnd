import React, { useEffect, useState } from "react";
import axios from "axios";

import { Row } from "reactstrap";
import CardTemplate from "../component/CardPost";

const Home = () => {
  const fetchPosts = () => {
    axios
      .get("http://localhost:8001/blogApp.com/post")
      .then((res) => {
        const listPosts = res.data;
        setPosts(listPosts);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const [posts, setPosts] = useState([]);
  return (
    <>
      <div>
        <Row id="row">
          <h3>Artikel</h3>
        </Row>
        <Row xs="4" id="row">
          {posts.map((data) => {
            const randomColor = ((Math.random() * 0xffffff) << 0).toString(16);
            let title = data.title;
            let content = data.body;
            let key = data.id;
            let source = "Home";
            let image = data.image;
            return (
              <CardTemplate
                key={key}
                id={key}
                color={"#" + randomColor}
                title={title}
                content={content}
                source={source}
                image = {image}
              ></CardTemplate>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default Home;
