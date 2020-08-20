import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Spacer } from '@zeit-ui/react';

export const Comment = (props: any) => {
  return (
    <React.Fragment>
      <Router>
        <div className="rounded-lg overflow-hidden shadow-lg bg-white w-full">
          <div className="m-5">
            <div className="flex justify-between">
              <p className="text-gray-500 font-thin">
                {props.comment.user_name}
              </p>
              <Spacer x={6} />
              <p className="flex text-gray-700">
                {props.comment.content}
              </p>
            </div>
          </div>
        </div>
        <Spacer y={0.4} />
      </Router >
    </React.Fragment >
  );
};
