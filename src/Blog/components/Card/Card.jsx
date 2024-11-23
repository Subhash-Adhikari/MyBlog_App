import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ blog }) => {
  return (
    <Link to={`/blog/${blog._id}`} className="group">
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mb-4 bg-white transition-all transform hover:scale-105 hover:shadow-xl">
        <img 
          className="w-full object-cover h-48 transition-all group-hover:opacity-75" 
          src={blog.imageUrl} 
          alt={blog.title} 
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-[#1e3a8a]">{blog.title}</div>
          <p className="text-gray-600 text-sm line-clamp-2">{blog.excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
