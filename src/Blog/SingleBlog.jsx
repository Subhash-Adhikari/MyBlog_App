import React from 'react';
import Layout from '../global_components/layout/layout';
import { Link } from 'react-router-dom';

const SingleBlog = () => {
  return (
    <Layout>
      <div className="bg-gray-100 dark:bg-gray-800 py-8 h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            {/* Product Image Section */}
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img className="w-full h-full object-cover rounded-lg" src="https://media.licdn.com/dms/image/v2/C5603AQEsO5t9DoyLQQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1655687115282?e=2147483647&v=beta&t=nZhH1StBsG0eJZfASlIdtXo6VwKe6kKztAMIy8z7bho" alt="Product Image" />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">

                 <Link to="/blog/edit"> <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700 transition duration-300">Edit</button>
                 </Link>

                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300">Delete</button>
                </div>
              </div>
            </div>
            {/* Product Details Section */}
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Blog Title</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">Category:</span>
                  <span className="text-gray-600 dark:text-gray-300">$29.99</span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">Published At:</span>
                  <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                </div>
              </div>
              
              {/* Product Description */}
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SingleBlog;