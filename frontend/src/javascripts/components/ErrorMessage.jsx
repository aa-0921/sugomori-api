// import React from "react"
// import { Field, getIn } from 'formik';

// // Formikエラーメッセージ表示用コンポーネント
// export default ({ name }) => (
//   <Field
//     name={name}
//     render={({ form }) => {
//       const error = getIn(form.errors, name);
//       const touch = getIn(form.touched, name);
//       const isShowError = touch && error;

//       return isShowError
//         ? <div>{error}</div>
//         : null;
//     }}
//   />
// );
