require('dotenv').config();

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Grid, Row, Note, Button, Divider, Spacer } from '@zeit-ui/react';
import * as Icon from '@zeit-ui/react-icons';
import User from './User';

export const Post = (props: any) => {
  // const onClickLike = async (postId: any) => {
  //   const obj = {
  //     current_user_id: User.get('currentUserId'),
  //   };
  //   const body = JSON.stringify(obj);
  //   const method = 'PUT';
  //   const postUrl: string = process.env.REACT_APP_API_URL_POSTS + '/like/' + postId;

  //   await fetch(postUrl, { method, body })
  //     .then((response) => {
  //       console.log(response.status);
  //       // if (response.status == 204) {
  //       if (response.status == 200) {
  //         console.log('response.status:200???: ', response.status);

  //         props.pushToLikeList(props.post.id);
  //       } else {
  //         if (process.env.NODE_ENV !== 'production') {
  //           console.log('投稿失敗');
  //         }
  //         throw new Error();
  //       }
  //     })
  //     .catch((error) => {
  //       if (process.env.NODE_ENV !== 'production') {
  //         console.log('投稿失敗');
  //       }
  //     });
  // };
  // const onClickUnLike = async (postId: any) => {
  //   const obj = {
  //     current_user_id: User.get('currentUserId'),
  //   };

  //   const body = JSON.stringify(obj);
  //   const method = 'PUT';
  //   const postUrl: string = process.env.REACT_APP_API_URL_POSTS + '/unlike/' + postId;

  //   await fetch(postUrl, { method, body })
  //     .then((response) => {
  //       console.log(response.status);
  //       // if (response.status == 204) {
  //       if (response.status == 200) {
  //         props.removeFromLikeList(props.post.id);
  //       } else {
  //         if (process.env.NODE_ENV !== 'production') {
  //           console.log('投稿失敗');
  //         }
  //         throw new Error();
  //       }
  //     })
  //     .catch((error) => {
  //       if (process.env.NODE_ENV !== 'production') {
  //         console.log('投稿失敗');
  //       }
  //     });
  // };
  // var listyle = {
  //   list-style-type: none;
  // };
  return (
    <>
      {/* <Row> */}
      {/* <div> */}
      {/* <div> */}
      {/* <div className="flex items-center">
        <div className="flex-1  text-center"> */}
      {/* <li key={props.post.id} className="flex items-center m-auto"> */}
      <img
        src={props.post.picture}
        className="rounded-lg"
        onClick={() => props.modalOpenHandler(props.post)}
      />
      {/* <Link to={'/profilepage/' + props.post.id}>
              post_id__{props.post.id} &emsp;{props.post.content}&emsp;
            </Link>

            {props.likeList.includes(props.post.id) ? (
              <Button
                type="warning"
                size="mini"
                auto
                ghost
                onClick={() => onClickUnLike(props.post.id)}
                // className="m-auto transition duration-500 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110"
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
                onClick={() => onClickLike(props.post.id)}
                // className="m-auto transition duration-500 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110"
              >
                <Icon.Heart size={8} />
                Like
              </Button>
            )} */}
      {/* </li>{' '} */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
};
