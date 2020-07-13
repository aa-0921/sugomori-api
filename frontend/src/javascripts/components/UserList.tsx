import * as React from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
import { Grid, Row, Note, Button, Divider, Spacer } from '@zeit-ui/react';
import * as Icon from '@zeit-ui/react-icons';
import { FollowButton } from './FollowButton';

export const UserList = (props: any) => {
  const onClickFollow = async (userId: any) => {
    const csrf = sessionStorage.getItem('X-CSRF-Token');
    const obj = {
      // 一時的にuser_idを1に
      current_user_id: 1,
      'X-CSRF-Token': csrf,
    };
    const body = JSON.stringify(obj);
    const method = 'PUT';
    const postUrl: string = '/users/follow/' + userId;

    await fetch(postUrl, { method, body })
      .then((response) => {
        console.log(response.status);
        // if (response.status == 204) {
        if (response.status == 200) {
          props.pushToFollowUsers(props.user.id);
        } else {
          throw new Error();
        }
      })
      .catch((error) => { });
  };
  const onClickUnFollow = async (userId: any) => {
    const obj = {

      // 一時的にuser_idを1に
      current_user_id: 1,
    };

    const body = JSON.stringify(obj);
    const method = 'PUT';
    const postUrl: string = '/users/unfollow/' + userId;

    await fetch(postUrl, { method, body })
      .then((response) => {
        console.log(response.status);
        // if (response.status == 204) {
        if (response.status == 200) {
          props.removeFromFollowUsers(props.user.id);
        } else {
          throw new Error();
        }
      })
      .catch((error) => { });
  };
  // var listyle = {
  //   list-style-type: none;
  // };
  return (
    <React.Fragment>
      <Row>
        <div className="flex items-center ml-8">
          <div className="flex-1  text-center">
            <li key={props.user.id} style={{ color: 'white' }} className="flex items-center m-auto">
              <Link to={'/profilepage/' + props.user.id}>{props.user.name}&emsp;</Link>

              <FollowButton
                onClickFollow={onClickFollow}
                onClickUnFollow={onClickUnFollow}
                followUsersList={props.followUsersList}
                user={props.user}
              />
            </li>
          </div>
        </div>
      </Row>
      <Divider />
    </React.Fragment>

  );
};
