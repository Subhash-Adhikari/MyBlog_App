import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
   <Link to="/blog/id">
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
      <img 
        className="w-full" 
        src="https://media.licdn.com/dms/image/v2/C5603AQEsO5t9DoyLQQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1655687115282?e=2147483647&v=beta&t=nZhH1StBsG0eJZfASlIdtXo6VwKe6kKztAMIy8z7bho" 
        alt="Sunset in the mountains" 
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
   </Link>
  );
};

export default Card;
