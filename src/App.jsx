import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Blog/Home";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import AddBlog from "./Blog/AddBlog";
import Layout from "./global_components/layout/layout";
import Navbar from "./global_components/navbar/Navbar";
import EditBlog from "./Blog/components/EditBlog";
import SingleBlog from "./Blog/SingleBlog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/add" element={<AddBlog />} />
        <Route path="/blog/edit" element={<EditBlog />} />
        <Route path="/blog/id" element={<SingleBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
