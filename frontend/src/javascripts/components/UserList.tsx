require('dotenv').config();

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Grid, Row, Note, Button, Divider, Spacer } from '@zeit-ui/react';
import * as Icon from '@zeit-ui/react-icons';
import User from './User';

export const UserList = (props: any) => {
  const onClickFollow = async (userId: any) => {
    const csrf = sessionStorage.getItem('X-CSRF-Token');
    const obj = {
      current_user_id: User.get('currentUserId'),
      'X-CSRF-Token': csrf,
    };
    const body = JSON.stringify(obj);
    const method = 'PUT';
    const postUrl: string = process.env.REACT_APP_API_URL_USERS + '/follow/' + userId;

    await fetch(postUrl, { method, body })
      .then((response) => {
        console.log(response.status);
        // if (response.status == 204) {
        if (response.status == 200) {
          props.pushToFollowUsers(props.user.id);
        } else {
          if (process.env.NODE_ENV !== 'production') {
            console.log('投稿失敗');
          }
          throw new Error();
        }
      })
      .catch((error) => {
        if (process.env.NODE_ENV !== 'production') {
          console.log('投稿失敗');
        }
      });
  };
  const onClickUnFollow = async (userId: any) => {
    const obj = {
      current_user_id: User.get('currentUserId'),
    };

    const body = JSON.stringify(obj);
    const method = 'PUT';
    const postUrl: string = process.env.REACT_APP_API_URL_USERS + '/unfollow/' + userId;

    await fetch(postUrl, { method, body })
      .then((response) => {
        console.log(response.status);
        // if (response.status == 204) {
        if (response.status == 200) {
          props.removeFromFollowUsers(props.user.id);
        } else {
          if (process.env.NODE_ENV !== 'production') {
            console.log('投稿失敗');
          }
          throw new Error();
        }
      })
      .catch((error) => {
        if (process.env.NODE_ENV !== 'production') {
          console.log('投稿失敗');
        }
      });
  };
  // var listyle = {
  //   list-style-type: none;
  // };
  return (
    <>
      <Row>
        <div className="flex items-center">
          <div className="flex-1  text-center">
            <li key={props.user.id} style={{ color: 'white' }} className="flex items-center m-auto">
              <Link to={'/profilepage/' + props.user.id}>{props.user.name}&emsp;</Link>
              {props.followUsersList.includes(props.user.id) ? (
                <Button
                  type="warning"
                  size="small"
                  auto
                  ghost
                  onClick={() => onClickUnFollow(props.user.id)}
                  className="m-auto"
                >
                  <Icon.EyeOff size={16} />
                  UnFollow
                </Button>
              ) : (
                <Button
                  type="success"
                  size="small"
                  auto
                  ghost
                  onClick={() => onClickFollow(props.user.id)}
                >
                  <Icon.Eye size={16} />
                  Follow
                </Button>
              )}
            </li>{' '}
          </div>
        </div>
      </Row>
      <Divider />
    </>
  );
};
