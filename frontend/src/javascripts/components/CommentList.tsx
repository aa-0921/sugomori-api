import * as React from 'react';
import { UserList } from './UserList';
import { Spacer } from '@zeit-ui/react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { Comment } from '../components/Comment';


export const CommentList = (props: any): any => {

  return (
    <React.Fragment>
      <Spacer y={1.5} />
      <div>
        {props.fetchComments.map((comment: any, index: number) => (
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
