import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { useFormikContext, useField } from 'formik';
import axios from 'axios';
import { Input, Spacer } from '@zeit-ui/react';


export const FormikPost = () => {
  // const [postImage, setPostImage] = useState('');

  // type bodyProps = {
  //   picture: string;
  //   content: string;
  // };

  // const values = {
  //   picture: picpostImage,
  //   content: '',
  // };
  const createPicpost = async (body: any) => {

    const headers = {
      'content-type': 'multipart/form-data',
    };
    const postUrl: string = '/picposts';
    console.log('createPicpost直前postUrl:', postUrl);

    await axios.post(postUrl, body, { headers });
  };
  const setImage = (e: any, setFieldValue: any) => {
    let canvas: any = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let maxW = 250;
    let maxH = 250;

    let img = new Image();
    img.onload = () => {
      let iw = img.width;
      let ih = img.height;
      let scale = Math.min(maxW / iw, maxH / ih);
      let iwScaled = iw * scale;
      let ihScaled = ih * scale;
      canvas.width = iwScaled;
      canvas.height = ihScaled;
      ctx.drawImage(img, 0, 0, iwScaled, ihScaled);
      const resizeData = canvas.toDataURL('image/jpeg', 0.5);
      // setPostImage(resizeData);
      // console.log('postImage:', postImage);

      // setFieldValue('post_image', resizeData);
      // console.log('resizeData:', resizeData);
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
  // const fileInputStyle = {
  //   width: '1000px',

  // };

  return (
    <Formik
      initialValues={{ picture: '', content: '', user_id: 0 }}
      onSubmit={(values) => {
        values.user_id = 1;
        console.log('values: ', values);
        console.log('values.picture: ', values.picture);
        console.log('values.content: ', values.content);

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
              <img
                src=""
              // 選択した画像を一時表示したい。
              />
              <label>投稿画像</label>
              <React.Fragment>
                <label className="transition duration-500 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110 text-white font-bold py-6 px-6 border-b-4 border-blue-700 hover:border-red-600 rounded-full cursor-pointer">
                  ファイルを選択して下さい
                <Field
                    type="file"
                    id="file"
                    name="file"
                    onChange={(e: any) => {
                      // setImage(e, setFieldValue);

                      var file = e.target.files[0];
                      var reader = new FileReader();

                      // この部分でpictureに値が入っていない？？
                      reader.onload = function (item) {
                        setFieldValue('picture', item.target !== null ? item.target.result : null);
                      };

                      reader.readAsDataURL(file);
                    }}

                    render={({ field }) => <input {...field} type="file" className="hidden" />}
                  />
                </label>
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
            <Spacer y={30} />
            <label>コメント</label>
            <Field
              className="input"
              type="text"
              name="content"
              value={values.content}
              onChange={handleChange}
              render={({ field }) => <input {...field} type="text" className="shadow border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />} />
            <button className="submit-button transition duration-500 ease-in-out bg-blue-900 hover:bg-red-700 transform hover:-translate-y-1 hover:scale-100 text-white font-bold py-3 px-20 border-b-4 border-blue-800 hover:border-red-600 rounded-full cursor-pointer" type="submit" >
              送信
            </button>
            {/* </Field> */}
          </Form>
        );
      }}
    />
  );
};
