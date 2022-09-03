import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Row } from "reactstrap";
import CardTemplate from "../../component/CardPost";

const UserDashboard = () => {
  const [cookies] = useCookies(["accessToken", "userId"]);
  const navigate = useNavigate();

  useEffect(() => {
    /**
     * 1. cek apakah akses token ada atau tidak
     * 2. cek apakah akses token decode strukturnya valid apa tidak
     * 3. cek server apakah akses token valid apa tidak
     */
    if (!cookies.accessToken) {
      navigate("/Home");
    }
  }, []);

  const fetchPosts = () => {
    axios
      .get("http://localhost:8001/blogApp.com/post?writer=" + cookies.userId)
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
        <Link to="/CreatePost">
          <button> Create Post </button>
        </Link>
      </div>
      <div>
        <Row xs="4" id="row">
          {posts.map((data) => {
            const randomColor = ((Math.random() * 0xffffff) << 0).toString(16);
            let title = data.title;
            let content = data.body;
            let key = data.id;
            let image = data.image;
            return (
              <CardTemplate
                key={key}
                id={key}
                color={"#" + randomColor}
                title={title}
                content={content}
                image = {image}
              >
              </CardTemplate>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default UserDashboard;
