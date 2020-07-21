import * as React from 'react';
import { useState, useEffect } from 'react';
import { FetchData } from '../api/FetchData'


import { FormikComment } from './FormikComment';
import { CommentList } from './CommentList';
// /FormikComment.tsx関連
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import { Input, Spacer } from '@zeit-ui/react';


export const CommentApp = (props: any) => {


  // コメントの一覧取得
  const [fetchComments, setFetchComments] = useState([]);
  const fetchCommentsUrl: string = `/picposts/${props.clickedPostId}/comments`;
  useEffect(() => {
    FetchData(fetchCommentsUrl).then((res) => setFetchComments(res.data));
  }, []);
  console.log('CommentAppのcurrentUserData', props.currentUserData);

  return (
    <React.Fragment>
      <FormikComment
        clickedPostId={props.clickedPostId}
        currentUserData={props.currentUserData}
        fetchComments={fetchComments}
        setFetchComments={setFetchComments}
      />
      <CommentList
        clickedPostId={props.clickedPostId}
        fetchComments={fetchComments}
      />
    </React.Fragment >
  );
};
