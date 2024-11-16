import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Blog/Home";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import AddBlog from "./Blog/AddBlog";
import Layout from "./global_components/layout/layout";
import Navbar from "./global_components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addblog" element={<AddBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
