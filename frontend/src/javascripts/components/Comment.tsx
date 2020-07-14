import * as React from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
import { Grid, Row, Note, Button, Divider, Spacer, Card } from '@zeit-ui/react';
import * as Icon from '@zeit-ui/react-icons';
import { FollowButton } from './FollowButton';

export const Comment = (props: any) => {


  return (
    <React.Fragment>
      <Router>
        <Card>
          <div className="flex items-center ml-8">
            <div className="flex-1  text-center">
              <li key={props.comment.id} className="flex items-center m-auto">
                <div className="flex justify-between w-2/5">
                  {/* <div>
                    <Link to={'/profilepage/' + props.user.id}>{props.user.name}&emsp;</Link>
                  </div> */}
                  <div className="bg-gray-100 w-40">
                    {props.comment.content}
                    {props.comment.user_id}

                  </div>
                </div>
              </li>
            </div>
          </div>
        </Card>
        <Spacer y={0.4} />
      </Router>
    </React.Fragment >
  );
};
