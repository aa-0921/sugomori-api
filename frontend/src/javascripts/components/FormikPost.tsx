import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { useFormikContext, useField } from 'formik';
import axios from 'axios';

export const FormikPost = () => {
  // const [picpostImage, setPicpostImage] = useState('');

  // type bodyProps = {
  //   picture: string;
  //   content: string;
  // };

  // const values = {
  //   picture: picpostImage,
  //   content: '',
  // };
  const createPicpost = async (body: any) => {

    const method = 'POST';

    const headers = { 'content-type': 'multipart/form-data' };
    const postUrl: string = '/picposts';
    await axios.post(postUrl, body, { headers });
    // .post(postUrl, body)

    // .then(({ data }) => {
    // if (data) {
    // setPicpost(data);
    // } else {
    // throw new Error(message);
    // }
    // })
    // .catch((e) => alert(e.message));
    // fetch(postUrl, { method, headers, body })
    //   .then(function (response) {
    //     if (response.data) {
    //       setPicpost(data);
    //     } else {
    //       throw new Error(response.message);
    //     }
    //   })
    //   .catch((e) => alert(e.message));
  };
  // const setImage = (e: any, setFieldValue: any) => {
  //   let canvas: any = document.getElementById('canvas');
  //   let ctx = canvas.getContext('2d');
  //   let maxW = 250;
  //   let maxH = 250;

  //   let img = new Image();
  //   img.onload = () => {
  //     let iw = img.width;
  //     let ih = img.height;
  //     let scale = Math.min(maxW / iw, maxH / ih);
  //     let iwScaled = iw * scale;
  //     let ihScaled = ih * scale;
  //     canvas.width = iwScaled;
  //     canvas.height = ihScaled;
  //     ctx.drawImage(img, 0, 0, iwScaled, ihScaled);
  //     const resizeData = canvas.toDataURL('image/jpeg', 0.5);
  //     // setPicpostImage(resizeData);
  //     // setFieldValue('picpost_image', resizeData);
  //     // setFieldValue('picture', resizeData);
  //   };
  //   img.src = URL.createObjectURL(e.target.files[0]);
  // };
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

        // submitData.append('formData', JSON.stringify(content));
        // submitData.append('formData', JSON.user_id(c1);
        // submitData.append('image', fileInput!.current.files[0]);
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
                  var file = e.target.files[0];
                  var reader = new FileReader();
                  // setFieldValue('attachment_filename', file.name);
                  reader.onload = function (item) {
                    setFieldValue('picture', item.target !== null ? item.target.result : null);

                    // setFieldValue('attachment_data', item.target.result);
                  };

                  reader.readAsDataURL(file);
                }}
              // onChange={(event: any) => {
              //   handleChange;
              //   setFieldValue('file', event.currentTarget.files[0]);
              // }}
              // onChange={handleChange}
              // id="select_posts_image"
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
  // return (
  // <Formik initialValues={initialValues} onSubmit={createPicpost}>
  //   {({ setFieldValue, isSubmitting }) => {
  //     return (
  //       <Form>
  //         <label>投稿画像</label>
  //         <img src={!picpostImage ? '' : picpostImage} />
  //         <React.Fragment>
  //           {/* ※※ */}
  //           <Field
  //             id="select_posts_image"
  //             type="file"
  //             name="picture"
  //             onChange={(e: any) => setImage(e, setFieldValue)}
  //           />
  //           <Field type="hidden" name="post_image" />
  //         </React.Fragment>

  //         <canvas
  //           id="canvas"
  //           style={{
  //             display: 'none',
  //           }}
  //           width="64"
  //           height="64"
  //         />
  //         <label>コメント</label>
  //         <Field className="input" type="text" name="content" />
  //         <button className="submit-button" type="submit" disabled={isSubmitting}>
  //           送信
  //         </button>
  //       </Form>
  //     );
  //   }}
  // </Formik>
  // );
};
