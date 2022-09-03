import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import DetailPost from "./pages/Post/DetailPostPage";
import Login from "./pages/User/LoginUserPage";
import Register from "./pages/User/RegistrationUserPage";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserDashboard from "./pages/User/UserDashboardPage";
import CreatePost from "./pages/Post/CreatePostPage";
import EditPost from "./pages/Post/EditPostPage";

const App = () => {
  return (
    <>
      <nav style={{ backgroundColor: "lightgreen" }}>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Register">Register</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/UserDashboard">UserDashboard</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        {/* <Route path="/Home/:postId" element={<DetailPost />} /> */}
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreatePost" element={<CreatePost />} />
        <Route path="/EditPost" element={<EditPost />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/DetailPost" element={<DetailPost />} />
        
      </Routes>
    </>
  );
};

export default App;
