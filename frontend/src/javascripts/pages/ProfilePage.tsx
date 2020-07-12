import * as React from 'react';
import { useState, useEffect } from 'react';
import { Card, Spacer, Modal, Button, Grid, Divider, Link } from '@zeit-ui/react';
import { FetchData } from '../api/FetchData'
// 投稿一覧関連
import { PostList } from '../components/PostList';
import * as Icon from '@zeit-ui/react-icons';

export const ProfilePage = (props) => {
  const [fetchUser, setFetchUser] = useState({
    id: 0,
    name: '',
  });

  // URLパラメータからユーザー情報の取得
  const getUserUrl: string = `/users/${props.match.params.id}`;
  useEffect(() => {
    FetchData(getUserUrl).then((res) => {
      setFetchUser(res.data);
    });
  }, []);

  // 投稿一覧関連
  // 全投稿の配列のState定義
  const [fetchPosts, setFetchPosts] = useState([]);
  const [initialFetchPosts, setInitialFetchPosts] = useState([]);
  // 検索のfilter後の投稿の配列の定義
  const [filterPosts, setFilterPosts] = useState([]);



  // このページのユーザーの投稿だけ取得
  // const onClickFollow = async (userId: any) => {
  //   const csrf = sessionStorage.getItem('X-CSRF-Token');
  //   const obj = {
  //     // 一時的にuser_idを1に
  //     current_user_id: 1,
  //     'X-CSRF-Token': csrf,
  //   };
  //   const body = JSON.stringify(obj);
  //   const method = 'PUT';
  //   const postUrl: string = '/users/follow/' + userId;

  //   await fetch(postUrl, { method, body })
  //     .then((response) => {
  //       console.log(response.status);
  //       // if (response.status == 204) {
  //       if (response.status == 200) {
  //         props.pushToFollowUsers(props.user.id);
  //       } else {
  //         throw new Error();
  //       }
  //     })
  //     .catch((error) => { });
  // };

  // このページのユーザーの投稿だけ取得











  const getAllPostUrl: string = 'http://localhost:3000/picposts';
  useEffect(() => {
    FetchData(getAllPostUrl).then((res) => {
      setFetchPosts(res.data);
      setInitialFetchPosts(res.data);
    });

    FetchData(getLikeListUrl).then((res) => {
      setLikeList(res.data.map((like: any) => like.id));
    });
  }, []);

  // 開発時点ではログイン処理を飛ばしている為、ID1で固定。後々修正
  const currentUserId = 1;

  const getLikeListUrl: string = 'http://localhost:3000/picposts/like_list/' + currentUserId;

  useEffect(() => {
    setFilterPosts(fetchPosts);
  }, [fetchPosts]);

  const filterList = (e: any) => {
    const updateList = initialFetchPosts.filter((post: any) => {
      return post.content.search(e.target.value) !== -1;
    });
    setFetchPosts(updateList);
  };
  console.log('fetchPosts', fetchPosts);

  const [likeList, setLikeList] = useState([]);
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

  // modal,open,close
  const [modalOpen, setModalOpen] = useState(false);
  const modalOpenHandler = (post: any) => {
    setClickedPost(post);
    setModalOpen(true);
  };
  const closeHandler = () => {
    setModalOpen(false);
  };

  const getClickedPostUserUrl: string = 'http://localhost:3000/users/' + clickedPost.user_id;
  console.log('getClickedPostUserUrl', getClickedPostUserUrl);

  useEffect(() => {
    if (clickedPost.user_id != 0) {
      console.log('clickedPost.user_id', clickedPost.user_id);
      console.log('getClickedPostUserUrl', getClickedPostUserUrl);

      FetchData(getClickedPostUserUrl).then((res) => setClickedPostUser(res.data));
      console.log('clickedPostUser', clickedPostUser);
    }
  }, [clickedPost]);

  console.log('post: ', clickedPost.id);
  console.log('getClickedPostUserUrl', getClickedPostUserUrl);

  console.log('clickedPostUser.name: ', clickedPostUser.name);
  console.log('clickedPostUser.id: ', clickedPostUser.id);

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
      // 一旦user_id 1で固定
      current_user_id: 1,
      'X-CSRF-Token': csrf,
    };
    const body = JSON.stringify(obj);
    const method = 'PUT';
    // const postUrl: string = process.env.REACT_APP_API_URL_POSTS + '/like/' + postId;
    const postUrl: string = 'http://localhost:3000/picposts/like/' + postId;

    await fetch(postUrl, { method, body })
      .then((response) => {
        console.log(response.status);
        if (response.status == 200) {
          console.log('response.status:200???: ', response.status);

          pushToLikeList(clickedPost.id);
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
      current_user_id: 1,
      'X-CSRF-Token': csrf,
    };
    const body = JSON.stringify(obj);
    const method = 'PUT';

    const postUrl: string = 'http://localhost:3000/picposts/unlike/' + postId;

    await fetch(postUrl, { method, body })
      .then((response) => {
        console.log(response.status);
        // if (response.status == 204) {
        if (response.status == 200) {
          removeFromLikeList(clickedPost.id);
        } else {
          throw new Error();
        }
      })
      .catch((error) => { });
  };
  // clickLike,unlike

  // 投稿一覧関連

  return (
    <React.Fragment>
      < Spacer y={1} />
      <Card shadow>
        <h1>{props.match.params.id}</h1>

        <h4>{fetchUser.name}</h4>

        <p>自己紹介</p>
      </Card>
      < Spacer y={1} />
      <div>
        <form action="">
          <input type="text" placeholder="search" onChange={filterList} />
        </form>
        {/* {!waiting && ( */}
        <PostList
          fetchPosts={fetchPosts}
          likeList={likeList}
          pushToLikeList={pushToLikeList}
          removeFromLikeList={removeFromLikeList}
          modalOpenHandler={modalOpenHandler}
          filterList={filterList}
          filterPosts={filterPosts}
        />
        <Modal width="35rem" open={modalOpen} onClose={closeHandler}>
          <React.Fragment>
            <Grid.Container justify="center">
              <Grid>
                <Modal.Content>
                  <div className=" flex flex-col items-center">
                    <img src={clickedPost.picture} className="rounded-lg" />
                    <Divider />
                    <div className="flex-1  text-center">
                      <Link to={'/profilepage/' + clickedPost.user_id}>
                        <span>{clickedPostUser.name}</span>
                      </Link>
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
          </React.Fragment>
        </Modal>
        {/*ーーーーーーーーーーーーーーーーーーーーーーーーー */}
      </div>
    </React.Fragment>

  );
}
