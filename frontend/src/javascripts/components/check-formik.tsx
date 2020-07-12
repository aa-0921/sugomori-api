import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { useFormikContext, useField } from 'formik';
import axios from 'axios';

export const FormikPost = () => {

  const createPicpost = async (body: any) => {

    const method = 'POST';

    const headers = { 'content-type': 'multipart/form-data' };
    const postUrl: string = '/picposts';
    await axios.post(postUrl, body, { headers });

  };

  return (
    <Formik
      initialValues={{ picture: '', content: '', user_id: 0 }}
      onSubmit={(values) => {
        values.user_id = 1;

        console.log('values: ', values);
        console.log('values.picture: ', values.picture);
        const submitData = new FormData();

        submitData.append('picture', values.picture);
        submitData.append('content', values.content);
        submitData.append('user_id', '1');
        const body = submitData;

        createPicpost(body);
      }}
      render={({ values, handleSubmit, handleChange, setFieldValue }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <div>
              <label>投稿画像</label>
              {/* <input */}
              <Field
                type="file"
                id="file"
                name="file"

                onChange={(e: any) => {
                  var file = e.target.files[0];
                  var reader = new FileReader();

                  reader.onload = function (item) {
                    setFieldValue('picture', item.target !== null ? item.target.result : null);
                  };

                  reader.readAsDataURL(file);
                }}
              />
            </div>
            <canvas
              id="canvas"
              style={{
                display: 'none',
              }}
              width="64"
              height="64"
            />
            <div>
              <label>comment</label>
              <Field type="text" name="content" value={values.content} onChange={handleChange} />
            </div>
            <button type="submit">送信</button>
          </Form>
        );
      }}
    />
  );

};

