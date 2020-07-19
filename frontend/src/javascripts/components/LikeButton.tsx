import * as React from 'react';
import { useState, useEffect } from 'react';
import { FetchData } from '../api/FetchData'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { PostList } from '../components/PostList';
import { FormikPost } from '../components/FormikPost';
import { Modal, Button, Grid, Divider, Row, Slider, Collapse, Popover, Text } from '@zeit-ui/react';
import * as Icon from '@zeit-ui/react-icons';
import { CommentApp } from '../components/CommentApp';


export const LikeButton = (props: any) => {

  // clickLike,unlike
  const onClickLike = async (postId: any) => {
    const csrf = sessionStorage.getItem('X-CSRF-Token');
    const obj = {
      // 一旦user_id 1で固定
      current_user_id: props.currentUserData.id,
      'X-CSRF-Token': csrf,
    };
    const body = JSON.stringify(obj);
    const method = 'PUT';
    // const postUrl: string = process.env.REACT_APP_API_URL_POSTS + '/like/' + postId;
    const postUrl: string = '/picposts/like/' + postId;

    await fetch(postUrl, { method, body })
      .then((response) => {
        console.log(response.status);
        if (response.status == 200) {
          console.log('response.status:200???: ', response.status);

          props.pushToLikeList(props.clickedPost.id);
        } else {
          throw new Error();
        }
      })
      .catch((error) => { });
  };
  const onClickUnLike = async (postId: any) => {
    const csrf = sessionStorage.getItem('X-CSRF-Token');
    const obj = {
      // 一旦user_id 1で固定
      current_user_id: props.currentUserData.id,
      'X-CSRF-Token': csrf,
    };
    const body = JSON.stringify(obj);
    const method = 'PUT';

    const postUrl: string = '/picposts/unlike/' + postId;

    await fetch(postUrl, { method, body })
      .then((response) => {
        console.log(response.status);
        // if (response.status == 204) {
        if (response.status == 200) {
          props.removeFromLikeList(props.clickedPost.id);
        } else {
          throw new Error();
        }
      })
      .catch((error) => { });
  };
  return (
    <React.Fragment>
      {props.likeList.includes(props.clickedPost.id) ? (
        <Button
          type="warning"
          size="mini"
          auto
          ghost
          onClick={() => onClickUnLike(props.clickedPost.id)}
        >
          <Icon.HeartFill size={12} />
                              UnLike
        </Button>
      ) : (
          <Button
            type="success"
            size="mini"
            auto
            ghost
            onClick={() => onClickLike(props.clickedPost.id)}
          >
            <Icon.Heart size={8} />
                              Like
          </Button>
        )}
    </React.Fragment >
  );
};
