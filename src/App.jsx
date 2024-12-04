import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Blog/Home";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import AddBlog from "./Blog/AddBlog";
import Layout from "./global_components/layout/Layout"; // Corrected import
import Navbar from "./global_components/navbar/Navbar";
import EditBlog from "./Blog/components/EditBlog";
import SingleBlog from "./Blog/SingleBlog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/homexyz" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/add" element={<AddBlog />} />
        <Route path="/blog/edit/:id" element={<EditBlog />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
