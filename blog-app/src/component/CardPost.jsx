import { useState } from "react";
import * as reactStrap from "reactstrap";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

function CardPost(props) {
  const [cookies] = useCookies(["accessToken", "userId"]);
  const { id, color, title, content, source, detail = false, image } = props;
  const [temp, setTemp] = useState(color);

  let tempButton;
  let tempBody;
  let tempButtonDasBoard;
  if (source !== "Home") {
    if (cookies.accessToken) {
      tempButton = (
        <Link
          to="/EditPost"
          state={{
            tempTitle: title,
            tempContent: content,
            tempImage: image,
            tempId: id,
          }}
        >
          <reactStrap.Button>Edit Post </reactStrap.Button>
        </Link>
      );
      tempButtonDasBoard = (
        <Link
          to="/DetailPost"
          state={{
            postId: id,
          }}
        >
          <reactStrap.Button id="buttonPad">Detail Post</reactStrap.Button>
        </Link>
      );
    }
  } else {
    tempButton = (
      <Link
        to="/DetailPost"
        state={{
          postId: id,
        }}
      >
        <reactStrap.Button id="buttonPad">Detail Post </reactStrap.Button>
      </Link>
    );
  }

  if (detail) {
    tempBody = <reactStrap.CardText>{content}</reactStrap.CardText>;
    tempButton = "";
  }

  return (
    <>
      <reactStrap.Col>
        <reactStrap.Card
          body
          className="my-2"
          style={{
            backgroundColor: temp,
            marginTop: "10px",
            height: "auto",
            width: "auto",
          }}
          id={id}
        >
          <img alt="Card cap" src={image} style={{width:"300px",height:"200px",position:"relative",left:"16%",marginBottom:"10px"}} />
          <reactStrap.CardTitle tag="h5">{title}</reactStrap.CardTitle>
          {tempBody}
          <reactStrap.CardBody style={{padding:"0"}}>
            {tempButton}
            {tempButtonDasBoard}
            <reactStrap.Button
            id="buttonPad"
              onClick={() => {
                setTemp("#" + ((Math.random() * 0xffffff) << 0).toString(16));
              }}
            >
              Change Card Color
            </reactStrap.Button>
          </reactStrap.CardBody>
        </reactStrap.Card>
      </reactStrap.Col>
    </>
  );
}

export default CardPost;
