import * as React from 'react';
import { useState, useEffect } from 'react';
import { Card, Spacer, Modal, Button, Grid, Divider, Link } from '@zeit-ui/react';
import { FetchData } from '../api/FetchData'
// 投稿一覧関連
import { PostList } from '../components/PostList';
import * as Icon from '@zeit-ui/react-icons';
import { FollowButton } from '../components/FollowButton';


export const ProfilePage = (props) => {
  const [fetchUser, setFetchUser] = useState({
    id: 0,
    name: '',
  });

  // const paramsID = props.match.params.id;
  // const [paramsUserID, setParamsUserID] = useState('');
  // setParamsUserID(props.match.params.id);

  // URLパラメータからユーザー情報の取得
  const getUserUrl: string = `/users/${props.match.params.id}`;
  useEffect(() => {
    FetchData(getUserUrl).then((res) => {
      console.log('res', res)
      console.log('res.data', res.data)

      setFetchUser(res.data);
    });
  }, [getUserUrl]);
  // }, [paramsUserID]);



  // 投稿一覧関連
  // 全投稿aの配列のState定義
  // const [fetchPosts, setFetchPosts] = useState([]);
  // このページのユーザーの投稿一覧
  const [fetchUserPosts, setFetchUserPosts] = useState([]);

  const [initialFetchPosts, setInitialFetchPosts] = useState([]);
  // 検索のfilter後の投稿の配列の定義
  const [filterPosts, setFilterPosts] = useState([]);



  // このページのユーザーの投稿だけ取得

  const userPostUrl: string = `/users/picposts/${props.match.params.id}`;
  console.log('userPostUrl', userPostUrl)

  // 開発時点ではログイン処理を飛ばしている為、ID1で固定。後々修正
  const currentUserId = 1;
  const getLikeListUrl: string = 'http://localhost:3000/picposts/like_list/' + currentUserId;

  useEffect(() => {
    FetchData(userPostUrl).then((res) => {
      console.log('userPostUrlのres', res)
      console.log('userPostUrlのres.data', res.data)
      setFetchUserPosts(res.data);
      setInitialFetchPosts(res.data);
      console.log('userPostUrlのfetchUserPosts', fetchUserPosts)
      console.log('userPostUrlのinitialFetchPosts', initialFetchPosts)
    });
  }, [getUserUrl]);

  useEffect(() => {
    FetchData(getLikeListUrl).then((res) => {
      console.log('getLikeListUrlのres', res)
      console.log('getLikeListUrlのres.data', res.data)
      setLikeList(res.data.map((like: any) => like.id));
    });
  }, []);

  // このページのユーザーの投稿だけ取得

  useEffect(() => {
    setFilterPosts(fetchUserPosts);
  }, [fetchUserPosts]);

  const filterList = (e: any) => {
    const updateList = initialFetchPosts.filter((post: any) => {
      return post.content.search(e.target.value) !== -1;
    });
    setFetchUserPosts(updateList);
  };
  console.log('fetchUserPosts', fetchUserPosts);

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
    const nextLikeUsers = arr.filter((el) => el !== picpost_id);
    setLikeList(nextLikeUsers);
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

  // FollowButton関連
  const pushToFollowUsers = (target: number) => {
    console.log(target, 'ma');
    const arr = Array.from(followUsers);
    arr.push(target);
    setFollowUsers(arr);
  };

  const removeFromFollowUsers = (target: number) => {
    const arr = Array.from(followUsers);
    const nextFollowUsers = arr.filter((el) => el !== target);
    setFollowUsers(nextFollowUsers);
  };
  const onClickFollow = async (userId: any) => {
    // 一時的にuser_idを1に
    const obj = { current_user_id: 1 };
    const body = JSON.stringify(obj);
    const method = 'PUT';
    const postUrl: string = '/users/follow/' + fetchUser.id;

    await fetch(postUrl, { method, body })
      .then((response) => {
        if (response.status == 200) {
          pushToFollowUsers(fetchUser.id);
        } else {
          throw new Error();
        }
      })
      .catch((error) => { });
  };
  const onClickUnFollow = async (userId: any) => {
    // 一時的にuser_idを1に
    const obj = { current_user_id: 1 };
    const body = JSON.stringify(obj);
    const method = 'PUT';
    const postUrl: string = '/users/unfollow/' + fetchUser.id;

    await fetch(postUrl, { method, body })
      .then((response) => {
        if (response.status == 200) {
          removeFromFollowUsers(fetchUser.id);
        } else {
          throw new Error();
        }
      })
      .catch((error) => { });
  };
  const [followUsers, setFollowUsers] = useState([]);

  // 開発時点ではログイン処理を飛ばしている為、ID1で固定。後々修正

  const getFollowListUrl: string = `/users/follow_list/${currentUserId}`;
  useEffect(() => {
    FetchData(getFollowListUrl).then((res) => {
      setFollowUsers(res.data.map((el: any) => el.id));
    });
  }, []);
  // FollowButton関連

  //deleteButton関連
  const onClickDelete = async (clickedPostId: any) => {
    // const obj = { current_user_id: 1 };
    // const body = JSON.stringify(obj);
    const method = 'DELETE';
    const postDeleteUrl: string = '/picposts/' + clickedPostId;

    await fetch(postDeleteUrl, { method })
      .then((response) => {
        if (response.status == 200) {
          removeFromFetchUserPosts(clickedPost.id);
          closeHandler();
        } else {
          throw new Error();
        }
      })
      .catch((error) => { });
    removeFromFetchUserPosts(clickedPost.id);

  };

  const removeFromFetchUserPosts = (target: number) => {
    const arr = Array.from(fetchUserPosts);
    const nextUserPosts = arr.filter((el) => el.id !== target);
    console.info('nextUserPosts', nextUserPosts)
    setFetchUserPosts(nextUserPosts);
  };

  //deleteButton関連

  const buttonSize = "large"
  console.log('followUsers', followUsers)
  return (
    <React.Fragment>
      < Spacer y={1} />
      <Card shadow>
        <div className="flex">
          <div className="w-auto">
            <h1>{props.match.params.id}</h1>
            <h4>{fetchUser.name}</h4>
            <p>自己紹介</p>
          </div>
          <div className="flex flex-col min-w-0 mt-auto ml-20">
            <div>
              <FollowButton
                onClickFollow={onClickFollow}
                onClickUnFollow={onClickUnFollow}
                followUsersList={followUsers}
                user={fetchUser}
                buttonSize={buttonSize}
              />
            </div>
          </div>
        </div>
      </Card>
      < Spacer y={1} />
      <div>
        <div className="flex justify-end mr-5">
          <form action="">
            <input type="text" placeholder="search" onChange={filterList} className="w-auto shadow border rounded py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" />
          </form>
        </div>
        <PostList
          fetchUserPosts={fetchUserPosts}
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
                    <div>
                      <Button
                        type="error"
                        size="mini"
                        auto
                        ghost
                        onClick={() => onClickDelete(clickedPost.id)}
                      >
                        <Icon.Delete size={8} />
                              Delete
                      </Button>
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
      </div>
    </React.Fragment>
  );
}
