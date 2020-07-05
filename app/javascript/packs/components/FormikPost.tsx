import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { useFormikContext, useField } from 'formik';
import axios from 'axios';

export const FormikPost = () => {
  const [postImage, setPostImage] = useState('');

  // type bodyProps = {
  //   picture: string;
  //   content: string;
  // };

  // const values = {
  //   picture: picpostImage,
  //   content: '',
  // };
  const createPicpost = async (postFormData: any) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log('postFormData:', postFormData);
    }

    const csrf = sessionStorage.getItem('X-CSRF-Token');
    const obj = {
      'X-CSRF-Token': csrf,
      postFormData: postFormData,
    };
    const body = JSON.stringify(obj);

    const method = 'POST';

    const headers = {
      'content-type': 'multipart/form-data',
    };
    const postUrl: string = process.env.REACT_APP_API_URL_POSTS!;
    if (process.env.NODE_ENV !== 'production') {
      console.log('postUrl:', postUrl);
    }
    await axios.post(postUrl, body, { headers });
  };
  const setImage = (e: any, setFieldValue: any) => {
    const canvas: any = document.getElementById('canvas');
    console.log('canvas:', canvas);

    const ctx = canvas!.getContext('2d');
    const maxW = 250;
    const maxH = 250;

    const img = new Image();
    img.onload = () => {
      const iw = img.width;
      const ih = img.height;
      const scale = Math.min(maxW / iw, maxH / ih);
      const iwScaled = iw * scale;
      const ihScaled = ih * scale;
      canvas.width = iwScaled;
      canvas.height = ihScaled;
      ctx.drawImage(img, 0, 0, iwScaled, ihScaled);
      const resizeData = canvas.toDataURL('image/jpeg', 0.5);
      setPostImage(resizeData);
      console.log('postImage:', postImage);

      setFieldValue('post_image', resizeData);
      console.log('resizeData:', resizeData);
    };
    console.log('img:', img);

    img.src = URL.createObjectURL(e.target.files[0]);
    console.log('img.src :', img.src);
  };
  // interface FormValues {
  //   picpost_image: string;
  //   name: string;
  // }
  // 初期値は必要なさそうなので、後々消す。
  // const initialValues: any = {
  //   picpost_image: '',
  //   constent: '',
  // };
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
        const postFormData = submitData;

        createPicpost(postFormData);
      }}
      render={({ values, handleSubmit, handleChange, setFieldValue, isSubmitting }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <div>
              <img
                src="http://localhost:8000/d8ccdf6e-f571-4761-852c-79752ed7b71c"

                // src={props.post.picture}
                // className="rounded-lg"
                // onClick={() => props.modalOpenHandler(props.post)}
              />
              <label>投稿画像</label>
              <React.Fragment>
                <Field
                  type="file"
                  // name="picture"
                  id="file"
                  name="file"
                  // value={values.picture}
                  // onChange={(e: any) => setImage(e, setFieldValue)}
                  // onChange={(event: any) => {
                  //   setFieldValue(
                  //     'file',
                  //     event.currentTarget.files !== null ? event.currentTarget.files[0] : null,
                  //   );
                  // }}
                  onChange={(e: any) => {
                    setImage(e, setFieldValue);

                    const file = e.target.files[0];
                    const reader = new FileReader();

                    reader.onload = function (item) {
                      setFieldValue('picture', item.target !== null ? item.target.result : null);
                    };

                    reader.readAsDataURL(file);
                  }}
                />
                <Field type="hidden" name="post_image" />
              </React.Fragment>
              {
                // onChange={(event: any) => {
                //   handleChange;
                //   setFieldValue('file', event.currentTarget.files[0]);
                // }}
                // onChange={handleChange}
                // id="select_posts_image"
              }
            </div>
            <canvas
              id="canvas"
              style={{
                display: 'none',
              }}
              width="64"
              height="64"
            />
            <label>コメント</label>
            <Field className="input" type="text" name="name" />
            <button className="submit-button" type="submit" disabled={isSubmitting}>
              送信
            </button>
            {/* </Field> */}
          </Form>
        );
      }}
    />
  );
};
