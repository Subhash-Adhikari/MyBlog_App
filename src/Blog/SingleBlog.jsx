import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Layout from "../global_components/layout/layout";
import { baseUrl } from "../config";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const deleteBlog = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(`${baseUrl}/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      if (response.status === 200) {
        navigate("/homexyz");
      } else {
        alert("Something went wrong :(");
      }
    } catch (error) {
      alert(error?.response?.data?.message || "An error occurred");
    }
  };

  const fetchBlog = async () => {
    try {
      const response = await axios.get(`${baseUrl}/blog/${id}`);
      if (response.status === 200) {
        setBlog(response.data.data);
      }
    } catch (error) {
      console.error("Failed to fetch blog:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-screen">
          <div className="text-center">
            <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin mx-auto"></div>
            <p className="text-gray-600 mt-4">Loading blog details...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (!blog) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-screen text-center">
          <p className="text-gray-600">
            Blog not found. It might have been deleted.
          </p>
          <Link to="/" className="text-blue-500 mt-4 hover:underline">
            Go back to home
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 py-12 min-h-screen">
        <div className="max-w-5xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          {/* Blog Header */}
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
              {blog.title}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Posted by{" "}
              <span className="font-semibold">{blog?.userId?.username}</span> in{" "}
              <span className="font-semibold text-blue-500">
                {blog.category}
              </span>
            </p>
          </div>

          {/* Blog Image */}
          <div className="relative w-full h-96 bg-gray-300 dark:bg-gray-700 rounded-lg overflow-hidden mb-6">
            <img
              className="w-full h-full object-cover transition-all duration-500 transform hover:scale-105"
              src={blog.imageUrl || "/default-image.jpg"}
              alt={blog.title}
            />
          </div>

          {/* Blog Description */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Blog Description:
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {blog.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-6 space-x-4">
            <Link to={`/blog/edit/${blog._id}`}>
              <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 transition">
                Edit Blog
              </button>
            </Link>
            <button
              onClick={deleteBlog}
              className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-300 transition"
            >
              Delete Blog
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleBlog;
