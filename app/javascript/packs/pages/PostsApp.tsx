import React, { useState, useEffect } from 'react';
import { FetchData } from '../scripts/api/FetchData';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { PostList } from '../components/PostList';
import User from '../components/User';
import { FormikPost } from '../components/FormikPost';

import { Modal, Button, Grid, Divider } from '@zeit-ui/react';

require('dotenv').config();

import * as Icon from '@zeit-ui/react-icons';

export const PostsApp = () => {
  const [fetchPosts, setFetchPosts] = useState([]);
  const [likeList, setLikeList] = useState<number[]>([]);
  const [clickedPostUser, setClickedPostUser] = useState({
    id: 0,
    name: '',
  });
  const [clickedPost, setClickedPost] = useState({
    id: 0,
    picture: '',
    content: '',
    user_id: 0,
  });

  const [modalOpen, setModalOpen] = useState(false);
  const modalOpenHandler = (post: any) => {
    setClickedPost(post);
    console.log('post: ', clickedPost.id);
    console.log('post: ', clickedPost.picture);

    setModalOpen(true);
  };
  const closeHandler = () => {
    setModalOpen(false);
    console.log('modal-closed');
  };
  // clickedPost.idからそのpostの投稿者を取得

  // console.log('PostsApp.tsx44行目:', getClickedPostUserUrl);

  // console.log('getClickedPostUserUrl:', getClickedPostUserUrl);
  console.log('clickedPost.user_id:', clickedPost.user_id);

  useEffect(() => {
    const getClickedPostUserUrl: string =
      process.env.REACT_APP_API_URL_USERS + '/' + clickedPost.user_id;
    FetchData(getClickedPostUserUrl).then((res) => setClickedPostUser(res.data));
  }, [clickedPost]);
  console.log('post: ', clickedPost.id);

  console.log('clickedPostUser.name: ', clickedPostUser.name);
  console.log('clickedPostUser.id: ', clickedPostUser.id);

  // 開発時点ではログイン処理を飛ばしている為、ID1で固定。後々修正
  const currentUserId = 1;
  const getLikeListUrl: string =
    process.env.REACT_APP_API_URL_POSTS + '/like_list/' + currentUserId;
  useEffect(() => {
    FetchData(getLikeListUrl).then((res) => {
      setLikeList(res.data.map((like: any) => like.id));
    });
  }, []);

  const pushToLikeList = (picpost_id: number) => {
    console.log(picpost_id, 'ma');
    const arr = Array.from(likeList);
    arr.push(picpost_id);
    setLikeList(arr);
  };

  const removeFromLikeList = (picpost_id: number) => {
    const arr = Array.from(likeList);
    const nextFollowUsers = arr.filter((el) => el !== picpost_id);
    setLikeList(nextFollowUsers);
  };

  // clickLike,unlike
  const onClickLike = async (postId: any) => {
    const csrf = sessionStorage.getItem('X-CSRF-Token');
    const obj = {
      current_user_id: User.get('currentUserId'),
      'X-CSRF-Token': csrf,
    };
    const body = JSON.stringify(obj);
    const method = 'PUT';
    const postUrl: string = process.env.REACT_APP_API_URL_POSTS + '/like/' + postId;

    await fetch(postUrl, { method, body })
      .then((response) => {
        console.log(response.status);
        if (response.status == 200) {
          console.log('response.status:200???: ', response.status);

          pushToLikeList(clickedPost.id);
        } else {
          if (process.env.NODE_ENV !== 'production') {
            console.log('いいね失敗');
          }
          throw new Error();
        }
      })
      .catch((error) => {
        if (process.env.NODE_ENV !== 'production') {
          console.log('いいね失敗');
        }
      });
  };
  const onClickUnLike = async (postId: any) => {
    const csrf = sessionStorage.getItem('X-CSRF-Token');
    const obj = {
      current_user_id: User.get('currentUserId'),
      'X-CSRF-Token': csrf,
    };
    const body = JSON.stringify(obj);
    const method = 'PUT';
    const postUrl: string = process.env.REACT_APP_API_URL_POSTS + '/unlike/' + postId;

    await fetch(postUrl, { method, body })
      .then((response) => {
        console.log(response.status);
        // if (response.status == 204) {
        if (response.status == 200) {
          removeFromLikeList(clickedPost.id);
        } else {
          if (process.env.NODE_ENV !== 'production') {
            console.log('いいね失敗');
          }
          throw new Error();
        }
      })
      .catch((error) => {
        if (process.env.NODE_ENV !== 'production') {
          console.log('いいね失敗');
        }
      });
  };
  // clickLike,unlike

  const getAllPostUrl: string = process.env.REACT_APP_API_URL_POSTS!;

  console.log('getAllPostUrl:', getAllPostUrl);

  useEffect(() => {
    FetchData(getAllPostUrl).then((res) => setFetchPosts(res.data));
  }, []);

  return (
    <>
      <Router>
        <div>
          {/* <Show /> */}

          <div>
            <div>
              {/* <DropZone /> */}
              <FormikPost />
              <Divider />

              <PostList
                fetchPosts={fetchPosts}
                likeList={likeList}
                pushToLikeList={pushToLikeList}
                removeFromLikeList={removeFromLikeList}
                modalOpenHandler={modalOpenHandler}
              />
            </div>
            <Modal width="35rem" open={modalOpen} onClose={closeHandler}>
              <>
                <Grid.Container justify="center">
                  <Grid>
                    <Modal.Content>
                      <div className=" flex flex-col items-center">
                        <img src={clickedPost.picture} className="rounded-lg" />
                        <Divider />
                        <div className="flex-1  text-center">
                          <span>{clickedPostUser.name}</span>
                          <Link to={'/profilepage/' + clickedPost.id}>
                            &emsp; {clickedPost.content}&emsp;
                          </Link>
                          {likeList.includes(clickedPost.id) ? (
                            <Button
                              type="warning"
                              size="mini"
                              auto
                              ghost
                              onClick={() => onClickUnLike(clickedPost.id)}
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
                              onClick={() => onClickLike(clickedPost.id)}
                            >
                              <Icon.Heart size={8} />
                              Like
                            </Button>
                          )}
                        </div>
                      </div>
                    </Modal.Content>
                  </Grid>
                </Grid.Container>
                <Modal.Action passive onClick={() => setModalOpen(false)}>
                  Cancel
                </Modal.Action>
              </>
            </Modal>
          </div>
          <Switch>
            {/* <Route path="/post/:id" component={Show} /> */}
            <Route path="/"></Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};
