import { useState, React, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import {
  Row,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Container,
} from "reactstrap";
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
        if (!res.data) {
          alert("Error");
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
      <Container fluid="md" id="detailPost">
        <Row>
          <Card className="my-2">
            <CardTitle tag="h3">{title}</CardTitle>
            <CardImg
              alt="Card image cap"
              src={image}
              style={{

              }}
              top
            />
            <CardBody>
              <CardText style={{ height: "400px" }}>{content}</CardText>
              <CardText>
                <small className="text-muted">
                  Created At {posts.createdAt}
                </small>
              </CardText>
            </CardBody>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default DetailPost;
