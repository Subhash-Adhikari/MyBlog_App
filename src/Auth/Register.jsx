import React from "react";
import { Form, useNavigate } from "react-router-dom";
import LRform from "./components_auth/LRform";
import axios from "axios";
import { baseUrl } from "../config";

const Register = () => {
  const navigate = useNavigate();
  const handleRegister = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}/register`, data);
      console.log(response);
      if (response.status === 201) {
        navigate("/login");
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };

  return <LRform type="Register" onSubmit={handleRegister} />;
};
export default Register;
