import React from "react";
import Layout from "../../global_components/layout/layout";
import Form from "./form/Form";

const EditBlog = () => {
  return (
    <div>
      <Layout>
        <Form type="Edit" onSubmit="handleEditBlog" />
      </Layout>
    </div>
  );
};

export default EditBlog;
