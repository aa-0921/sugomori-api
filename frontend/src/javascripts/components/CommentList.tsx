import * as React from 'react';
import { Spacer } from '@zeit-ui/react';
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
