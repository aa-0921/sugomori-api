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
