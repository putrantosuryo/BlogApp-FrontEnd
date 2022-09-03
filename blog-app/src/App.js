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
import NavbarTemplate from "./component/NavbarTemplate";
import { Form, FormGroup, Label, Input, Button,Container } from "reactstrap";


const App = () => {
  return (
    <>
    <NavbarTemplate />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
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
