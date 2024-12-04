import React, { useState, useEffect } from 'react';
import Navbar from '../global_components/navbar/Navbar';
import Card from './components/Card/Card';
import { baseUrl } from '../config';
import axios from 'axios';
import Layout from "../global_components/layout/Layout";


const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    
      const response = await axios.get(`${baseUrl}/blog`);
      if (response.status === 200) {
        setBlogs(response.data.data); // Assuming response.data.data contains the blog list
      }
    }
      
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <Layout>
      <div className="flex flex-wrap justify-center space-x-5 mt-6">
        {blogs.length > 0 &&
          blogs.map((blog) => {
            console.log(blog);
            return <Card key={blog.id} blog={blog} />; // Added unique key prop
          })}
      </div>
    </Layout>
  );
};

export default Home;
