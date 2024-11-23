import React, { useState } from "react";

const Form = ({ type, onSubmit }) => {
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    description: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: name === "image" ? e.target.files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      {/* Main Container */}
      <div className="w-full max-w-3xl p-8 md:px-12 rounded-2xl shadow-lg bg-white">
        {/* Form Header */}
        <div className="flex justify-center mb-6">
          <h1 className="font-bold uppercase text-3xl text-center text-[#1e3a8a]">
            {type} Blog
          </h1>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-6">
            <input
              className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
              type="text"
              placeholder="Title*"
              name="title"
              onChange={handleChange}
              required
            />
            <input
              className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
              type="text"
              placeholder="Sub-title*"
              name="subtitle"
              onChange={handleChange}
              required
            />
            <input
              className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
              type="file"
              name="image"
              onChange={handleChange}
              required
            />
            <input
              className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
              type="number"
              placeholder="Category*"
              name="category"
              onChange={handleChange}
              required
            />
          </div>

          <div className="my-6">
            <textarea
              placeholder="Description*"
              className="w-full h-32 bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
              onChange={handleChange}
              name="description"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button className="uppercase text-sm font-bold tracking-wide bg-[#1e3a8a] text-white px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] hover:bg-[#1e3a8a] transition-all">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
