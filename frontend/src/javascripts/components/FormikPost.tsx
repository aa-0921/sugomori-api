import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { useFormikContext, useField } from 'formik';
import axios from 'axios';
import { Input, Spacer } from '@zeit-ui/react';

export const FormikPost = () => {
  const [postFileName, setPostFileName] = useState('');
  const [postFilePreview, setPostFilePreview] = useState(null);


  const createPicpost = async (body: any) => {

    const headers = { 'content-type': 'multipart/form-data' };
    const postUrl: string = '/picposts';
    await axios.post(postUrl, body, { headers });
  };
  const onFileChange = (e: any) => {
    const files = e.target.files

    if (files.length > 0) {
      var file = files[0]
      var reader = new FileReader()
      reader.onload = (e) => {
        setPostFilePreview(e.target.result)
      };
      reader.readAsDataURL(file)
    } else {
      setPostFilePreview(null)
    }
  }


  return (
    <Formik
      initialValues={{ picture: '', content: '', user_id: 0 }}

      onSubmit={(values) => {
        values.user_id = 1;

        const submitData = new FormData();

        submitData.append('picture', values.picture);
        submitData.append('content', values.content);
        submitData.append('user_id', '1');

        const body = submitData;
        createPicpost(body);


        submitData.append('picture', '');
        submitData.append('content', '');
        submitData.append('user_id', '');
      }}

      render={({ values, handleSubmit, handleChange, setFieldValue }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <div>
              <label>投稿画像</label>
              {postFilePreview != null ? (
                <div>
                  <img src={postFilePreview} />
                </div>
              ) : (
                  <div></div>
                )}
              < Spacer y={20} />
              <label className="transition duration-500 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110 text-white font-bold py-6 px-6 border-b-4 border-blue-700 hover:border-red-600 rounded-full cursor-pointer">
                ファイルを選択して下さい
              <input
                  className=""
                  id="file"
                  name="file"
                  type="file"
                  onChange={(e: any) => {
                    console.log('postFileName', postFileName)

                    var file = e.target.files[0];
                    var reader = new FileReader();
                    reader.onload = function (item) {
                      setFieldValue('picture', item.target !== null ? item.target.result : null);
                    };

                    reader.readAsDataURL(file);

                    setPostFileName(e.target.files[0].name)
                    onFileChange(e)
                  }}
                />

              </label>
              <Spacer y={3} />
              <h3>{postFileName}</h3>

            </div>
            <canvas
              id="canvas"
              style={{
                display: 'none',
              }}
              width="64"
              height="64"
            />
            <Spacer y={30} />

            <div>
              <label>comment</label>
              {/* <input */}
              <Field type="text" name="content" value={values.content} onChange={handleChange} />
            </div>
            <button type="submit">送信</button>
            {/* </Field> */}
          </Form>
        );
      }}
    />
  );
};
