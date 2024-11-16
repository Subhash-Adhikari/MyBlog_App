import React from 'react';
import Navbar from '../global_components/navbar/Navbar';
import Form from './components/form/Form';

const AddBlog = () => {
  return (
    <div>
      <Navbar />
      <Form type='Create'/>
    </div>
  );
};

export default AddBlog;
