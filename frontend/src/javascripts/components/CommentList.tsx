import * as React from 'react';
import { UserList } from './UserList';
import { Spacer } from '@zeit-ui/react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { MemberList } from '../components/MemberList';
import { FetchData } from '../api/FetchData';
import { Comment } from '../components/Comment';


export const CommentList = (props: any): any => {
  const [fetchComments, setFetchComments] = useState([]);


  const fetchCommentsUrl: string = `/picposts/${props.clickedPostId}/comments`;
  useEffect(() => {
    FetchData(fetchCommentsUrl).then((res) => setFetchComments(res.data));
  }, []);
  return (
    <React.Fragment>
      <Spacer y={1.5} />
      <div>
        {fetchComments.map((comment: any, index: number) => (
          <div key={index} className="list">
            <Comment
              comment={comment}
            />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};
