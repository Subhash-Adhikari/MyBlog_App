import React, { useState } from "react";
import Layout from "../../global_components/layout/Layout"; // Corrected path
import Form from "./form/Form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../config";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(""); 

  const handleSubmit = async (data) => {
    try {
      const response = await axios.patch(`${baseUrl}/blog/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      });
      if (response.status === 200) {
        navigate("/homexyz");
      } else {
        setError("Something went wrong");
      }
    } catch (error) {
      setError(error?.response?.data?.message || "An unexpected error occurred");
    }
  };

  return (
    <div>
      <Layout>
        {error && ( 
          <div className="bg-red-100 text-red-800 p-4 rounded mb-4">
            {error}
          </div>
        )}
        <Form type="Edit" onSubmit={handleSubmit} />
      </Layout>
    </div>
  );
};

export default EditBlog;
