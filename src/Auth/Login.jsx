import React from "react";
import LRform from "./components_auth/LRform";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../config";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}/login`, data);
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/homexyz");
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };
  return (
    <div>
      <LRform type="Login" onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
