import React from "react";
import Navbar from "../global_components/navbar/Navbar";
import Form from "./components/form/Form";
import { baseUrl } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const navigate = useNavigate();
  const handleCreateBlog = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}/blog`, data, {
        headers: {
          "Content-Type": "multipart/form-data", // For handling images/files
          Authorization: localStorage.getItem("token"),
        },
      });
      if (response.status === 201) {
        navigate("/homexyz");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <Navbar />
      <Form type="Create" onSubmit={handleCreateBlog} />
    </div>
  );
};

export default AddBlog;
