import * as React from 'react';
import { useState, useEffect } from 'react';
import { Card, Spacer, Modal, Button, Grid, Divider, Link } from '@zeit-ui/react';
import { FetchData } from '../api/FetchData'
// 投稿一覧関連
import { PostList } from '../components/PostList';
import * as Icon from '@zeit-ui/react-icons';
import { FollowButton } from '../components/FollowButton';
import { LikeButton } from '../components/LikeButton';


export const ProfilePage = (props: any) => {
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


  console.log('props.currentUserData.id', props.currentUserData.id)

  // getLikeListUrlの定義

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
    console.log('clickedPost.id', clickedPost.id)
    setModalOpen(true);
  };
  const closeHandler = () => {
    setModalOpen(false);
  };
  console.log('clickedPost.id', clickedPost.id)

  const getClickedPostUserUrl: string = '/users/' + clickedPost.user_id;
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
    const obj = { current_user_id: currentUserId };
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
    const obj = { current_user_id: currentUserId };
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




  //deleteButton関連
  const onClickDelete = async (clickedPostId: any) => {
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
  const currentUserId = props.currentUserData.id;

  // const getLikeListUrl: string = `/picposts/like_list/${current_user_id}`;
  const getLikeListUrl: string = `/picposts/like_list/${currentUserId}`;

  console.log('getLikeListUrl', getLikeListUrl)
  console.log('props.currentUserData.id', props.currentUserData.id)
  console.log('props.currentUserData.id.class', props.currentUserData.id.class)

  const getFollowListUrl: string = `/users/follow_list/${currentUserId}`;
  console.log('getFollowListUrl: ', getFollowListUrl);



  useEffect(() => {
    if (currentUserId != 0) {
      FetchData(getLikeListUrl).then((res) => {
        setLikeList(res.data);
      });
      console.log('likeList', likeList)

    };
  }, [currentUserId]);

  console.log('likeList', likeList)


  useEffect(() => {
    if (currentUserId != 0) {
      FetchData(getFollowListUrl).then((res) => {
        setFollowUsers(res.data.map((el: any) => el.id));
      });
    }
  }, [currentUserId]);

  return (
    <React.Fragment>
      < Spacer y={3} />
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
          {/* <React.Fragment>
            <Grid.Container justify="center">
              <Grid> */}
          <Modal.Content>
            <div className=" flex flex-col items-center">
              <img src={clickedPost.picture} className="rounded-lg" />
              <Divider />
              <div className="flex-1  text-center">
                <Link to={'/profilepage/' + clickedPost.user_id}>
                  <span>{clickedPostUser.name}</span>
                </Link>

                  &emsp; {clickedPost.content}&emsp;

                <LikeButton
                  likeList={likeList}
                  clickedPost={clickedPost}
                  pushToLikeList={pushToLikeList}
                  removeFromLikeList={removeFromLikeList}
                  currentUserData={props.currentUserData}
                />
              </div>

            </div>
          </Modal.Content>
          {/* </Grid>
            </Grid.Container> */}
          <Modal.Action>
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
          </Modal.Action>
          <Modal.Action passive onClick={() => setModalOpen(false)}>
            Cancel
                </Modal.Action>
          {/* </React.Fragment> */}
        </Modal>
      </div>
    </React.Fragment>
  );
}
