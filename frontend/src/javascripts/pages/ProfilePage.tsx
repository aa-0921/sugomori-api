import * as React from 'react';
import { useState, useEffect } from 'react';
import { Card, Spacer, Modal, Button, Table, Divider, Link, User } from '@zeit-ui/react';
import { FetchData } from '../api/FetchData'
// 投稿一覧関連
import { PostList } from '../components/PostList';
import * as Icon from '@zeit-ui/react-icons';
import { FollowButton } from '../components/FollowButton';
import { LikeButton } from '../components/LikeButton';
import { ClarifaiTagList } from '../components/ClarifaiTagList';
import { ClarifaiApp } from '../api/ClarifaiApp'
export const ProfilePage = (props: any) => {
  const [fetchUser, setFetchUser] = useState({
    id: 0,
    name: '',
    email: ''
  });

  const getUserUrl: string = `/users/${props.match.params.id}`;
  useEffect(() => {
    FetchData(getUserUrl).then((res) => {
      setFetchUser(res.data);
    });
  }, [getUserUrl]);

  // このページのユーザーの投稿一覧
  const [fetchUserPosts, setFetchUserPosts] = useState([]);
  const [initialFetchPosts, setInitialFetchPosts] = useState([]);
  // 検索のfilter後の投稿の配列の定義
  const [filterPosts, setFilterPosts] = useState([]);
  const [likeList, setLikeList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [clarifaiTags, setClarifaiTags] = useState([])

  // このページのユーザーの投稿だけ取得
  const userPostUrl: string = `/users/picposts/${props.match.params.id}`;
  const [clickedPost, setClickedPost] = useState({
    id: 0,
    picture: '',
    content: '',
    user_id: 0,
    thumbnail: ''
  });

  // getLikeListUrlの定義
  useEffect(() => {
    FetchData(userPostUrl).then((res) => {
      setFetchUserPosts(res.data);
      setInitialFetchPosts(res.data);
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


  const [clickedPostUser, setClickedPostUser] = useState({
    id: 0,
    name: '',
  });



  // modal,open,close

  const modalOpenHandler = (post: any) => {
    const getClickedPictureUrl: string = `/picposts/${post.id}`;
    FetchData(getClickedPictureUrl).then((res) => {
      setClickedPost(res.data);
    });
    // setClickedPost(post);
    setModalOpen(true);
    removeHeader();
  };
  const closeHandler = () => {
    setClarifaiTags([])
    setModalOpen(false);
    addHeader();
    setClickedPost({
      id: 0,
      picture: '',
      content: '',
      user_id: 0,
      thumbnail: ''
    });
  };
  const removeHeader = () => {
    const target = document.getElementById('header')
    target.classList.add('head-animation');
  };

  const addHeader = () => {
    const target = document.getElementById('header')
    target.classList.remove('head-animation');

  };

  useEffect(() => {
    const getClickedPostUserUrl: string = '/users/' + clickedPost.user_id;

    if (clickedPost.user_id != 0) {
      FetchData(getClickedPostUserUrl).then((res) => setClickedPostUser(res.data));
    }
  }, [clickedPost]);

  const pushToLikeList = (picpost_id: number) => {
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
    setFetchUserPosts(nextUserPosts);
  };

  //deleteButton関連
  const buttonSize = "large"
  const currentUserId = props.currentUserData.id;
  const getLikeListUrl: string = `/picposts/like_list/${currentUserId}`;
  const getFollowListUrl: string = `/users/follow_list/${currentUserId}`;

  useEffect(() => {
    if (currentUserId != 0) {
      FetchData(getLikeListUrl).then((res) => {
        setLikeList(res.data);
      });
    };
  }, [currentUserId]);

  useEffect(() => {
    if (currentUserId != 0) {
      FetchData(getFollowListUrl).then((res) => {
        if (res.data == null) {
          setFollowUsers([])
        }
        setFollowUsers(res.data.map((el: any) => el.id));
      });
    }
  }, [currentUserId]);
  const data = [
    { 投稿数: fetchUserPosts.length > 0 ? fetchUserPosts.length : 0, フォローしている数: followUsers.length > 0 ? followUsers.length : 0, いいねしている数: likeList.length > 0 ? likeList.length : 0 },
  ]

  // clarifaiTags関連
  const encodedData = clickedPost.thumbnail
  console.log('encodedData', encodedData)
  var fileExtension = encodedData.toString().slice(encodedData.indexOf('/') + 1, encodedData.indexOf(';'))
  console.log('fileExtension', fileExtension)
  if (fileExtension == 'jpeg') {
    var fileExtension = 'jpg'
  }
  const clarifaiUrl = `https://sugomori-app.s3-ap-northeast-1.amazonaws.com/picpost_id_${clickedPost.id}_post_image.${fileExtension}`
  console.log('clarifaiUrl', clarifaiUrl)
  useEffect(() => {
    if (clickedPost.id != 0 && clickedPost.id != undefined) {
      ClarifaiApp(clarifaiUrl).then((res) => {
        console.log('clarifaiUrl', clarifaiUrl)

        setClarifaiTags(res.slice(0, 10).map((el: any) => `${el.name.toUpperCase()} `))
      })
    }
    console.log('clarifaiUrl', clarifaiUrl)

  }, [clickedPost])

  return (
    <React.Fragment>
      {/* <BackGround /> */}
      < Spacer y={3} />
      <Card shadow>
        <div className="flex">
          <div className="w-auto">
            {/* <User name={fetchUser.name}>
              {fetchUser.email}
            </User> */}
            <h4>{fetchUser.name}</h4>

            <Table data={data}>
              <Table.Column prop="投稿数" label="投稿数" width={60} />
              <Table.Column prop="フォローしている数" label="フォローしている数" width={200} />
              <Table.Column prop="いいねしている数" label="いいねしている数" width={200} />
            </Table>
          </div>
          {props.currentUserData.id != props.match.params.id ? (
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
          ) : (
              <div></div>
            )}
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
          <Modal.Content className="overflow-y-scroll z-10">
            <div className="flex flex-col items-center h-auto">
              <div className="imageDiv flex flex-col h-auto">
                {clickedPost.picture != '' ? (
                  <img src={clickedPost.picture} className="modalImage object-contain rounded-lg" />
                ) : (
                    <div className="wait-clickedpost-picture"></div>
                  )}
              </div>
              <Spacer y={0.2} />
              {clarifaiTags.length > 0 ? (
                <ClarifaiTagList
                  clarifaiTags={clarifaiTags}
                />
              ) : (
                  <div className="wait-Clarifai-tag"></div>
                )}
              <Spacer y={0.5} />
              <div className="flex text-center mt-4">
                <span>{clickedPostUser.name}</span>


                <span className="modal-content">
                  &emsp; {clickedPost.content}&emsp;
                        </span>

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
          {props.currentUserData.id == props.match.params.id ? (
            <Modal.Action>
              <div>
                <Button
                  type="error"
                  size="mini"
                  auto

                  onClick={() => onClickDelete(clickedPost.id)}
                >
                  <Icon.Delete size={10} />
                    Delete
                </Button>
              </div>
            </Modal.Action>
          ) : (
              <div></div>
            )}
          <Modal.Action passive onClick={() => setModalOpen(false)}>
            Cancel
          </Modal.Action>
        </Modal>
      </div>
    </React.Fragment>
  );
}
