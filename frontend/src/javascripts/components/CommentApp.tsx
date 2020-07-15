import * as React from 'react';
import { useState, useEffect } from 'react';
import { FetchData } from '../api/FetchData'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { PostList } from './PostList';

import { Modal, Button, Grid, Divider, Row, Slider, Collapse, Popover, Text } from '@zeit-ui/react';
import * as Icon from '@zeit-ui/react-icons';
import { FormikComment } from './FormikComment';
import { CommentList } from './CommentList';


export const CommentApp = (props: any) => {
  console.log('CommentAppのcurrentUserData', props.currentUserData);

  return (
    <React.Fragment>

      <FormikComment
        clickedPostId={props.clickedPostId}
        currentUserData={props.currentUserData}
      />
      <CommentList clickedPostId={props.clickedPostId} />

    </React.Fragment >
  );
};
