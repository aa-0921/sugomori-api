import * as React from 'react';
import { useState, useEffect } from 'react';
import { FetchData } from '../api/FetchData'
import { FormikComment } from './FormikComment';
import { CommentList } from './CommentList';

export const CommentApp = (props: any) => {
  // コメントの一覧取得
  const [fetchComments, setFetchComments] = useState([]);
  const fetchCommentsUrl: string = `/picposts/${props.clickedPostId}/comments`;
  useEffect(() => {
    FetchData(fetchCommentsUrl).then((res) => setFetchComments(res.data));
  }, []);

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
