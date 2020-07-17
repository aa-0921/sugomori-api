import * as React from 'react';
import { useState, useEffect } from 'react';
import { FetchData } from '../api/FetchData'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { PostList } from '../components/PostList';
import { FormikPost } from '../components/FormikPost';
import { Modal, Button, Grid, Divider, Row, Slider, Collapse, Popover, Text } from '@zeit-ui/react';
import * as Icon from '@zeit-ui/react-icons';
import { CommentApp } from '../components/CommentApp';
import { LikeButton } from '../components/LikeButton';


export const PostModal = (props: any) => {

  return (
    <Modal width="35rem" open={props.postModalOpen} onClose={props.postModalCloseHandler}>
      <Modal.Content>
        <FormikPost
          postModalCloseHandler={props.postModalCloseHandler}
          setFilterPosts={props.setFilterPosts}
          filterPosts={props.filterPosts}
        />
      </Modal.Content>
      <Modal.Action
        passive onClick={() => props.setPostModalOpen(false)}
        className="bg-gray-100"
      >
        <div>
          Cancel
                  </div>
      </Modal.Action>
    </Modal>
  );
};
