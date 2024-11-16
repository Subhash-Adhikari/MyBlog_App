import React from 'react';

const Form = ({ type }) => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-white">
      {/* Main Container */}
      <div className="w-full max-w-3xl p-8 md:px-12 rounded-2xl shadow-2xl bg-gray-50">
        {/* Form Header */}
        <div className="flex justify-center">
          <h1 className="font-bold uppercase text-3xl text-center">{type} Blog</h1>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-6">
          <input
            className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Title*"
          />
          <input
            className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Sub-title*"
          />
          <input
            className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="file"
          />
          <input
            className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Category*"
          />
        </div>

        <div className="my-4">
          <textarea
            placeholder="Description*"
            className="w-full h-32 bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 px-6 py-3 rounded-lg focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
