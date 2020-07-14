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

  const [fetchPosts, setFetchPosts] = useState([]);
  const getAllPostUrl: string = '/picposts';
  useEffect(() => {
    FetchData(getAllPostUrl).then((res) => {
      setFetchPosts(res.data);
    });
  }, []);

  const currentUserId = 1;

  return (
    <React.Fragment>


      <FormikComment clickedPostId={props.clickedPostId} />
      <CommentList clickedPostId={props.clickedPostId} />

    </React.Fragment >
  );
};
