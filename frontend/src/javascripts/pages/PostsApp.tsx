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


export const PostsApp = (props: any) => {
  // 全投稿の配列のState定義
  const [fetchPosts, setFetchPosts] = useState([]);
  const [initialFetchPosts, setInitialFetchPosts] = useState([]);
  // 検索のfilter後の投稿の配列の定義
  const [filterPosts, setFilterPosts] = useState([]);

  const getAllPostUrl: string = '/picposts';

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

  const getLikeListUrl: string = '/picposts/like_list/' + currentUserId;

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
    // 
    const nextLikeUsers = arr.filter((el) => el !== picpost_id);
    setLikeList(nextLikeUsers);
  };


  // 投稿フォームmodal,open,close
  const [postModalOpen, setPostModalOpen] = useState(false);
  const postModalOpenHandler = () => {
    setPostModalOpen(true);
  };
  const postModalCloseHandler = () => {
    setPostModalOpen(false);
  };
  // Slider関連
  const [columnWidthValue, setColumnWidthValue] = useState(300)
  const columnWidthHandler = (val: any) => {
    console.log(val)
    setColumnWidthValue(val)
  }
  // Slider関連

  // Popover関連
  // const popoverSlider = () => (
  //   <div className="mr-auto ml-80 w-screen pl-200 flex justify-center items-center">
  //     <span className="wr-10 pr-5 mr-50">横幅</span>
  //     {/* <Row style={{ width: '75%' }}> */}
  //     {/* <Row> */}
  //     <Slider
  //       value={columnWidthValue} onChange={columnWidthHandler}
  //       step={20} max={450} min={60} initialValue={300}
  //       className="ml-70 pl-100"
  //     />
  //     {/* </Row> */}
  //   </div>
  // )
  // Popover関連

  console.log('PostAppのcurrentUserData', props.currentUserData);


  return (
    <React.Fragment>
      <Router>
        <div>
          <div>
            <div>
              {/* <div className="ml-20">
                <Popover content={popoverSlider} className="ml-80">
                  横幅
                </Popover>
              </div> */}
              <div>
                {/* <Collapse initialVisible className="h-1 text-base"> */}
                <Collapse.Group>
                  <Collapse title=" " className="h-1 text-base">
                    <div className="bg-white flex justify-center items-center">
                      <span className="wr-10 pr-5">横幅</span>
                      <Row style={{ width: '75%' }}>
                        <Slider
                          value={columnWidthValue} onChange={columnWidthHandler}
                          step={20} max={500} min={100} initialValue={300}
                        />
                      </Row>
                    </div>
                  </Collapse>
                </Collapse.Group>
              </div>
              <div className="flex justify-end mr-5 mt-3">
                <form action="">
                  <input type="text" placeholder="search" onChange={filterList} className="w-auto shadow border rounded py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" />
                </form>
              </div>

              <PostList
                fetchPosts={fetchPosts}
                likeList={likeList}
                pushToLikeList={pushToLikeList}
                removeFromLikeLisft={removeFromLikeList}
                modalOpenHandler={modalOpenHandler}
                filterList={filterList}
                filterPosts={filterPosts}
                columnWidthValue={columnWidthValue}
              />
            </div>

            <Modal width="100vh" wrapClassName={"modalWrap"}
              open={modalOpen} onClose={closeHandler}>
              <React.Fragment>
                {/* <Grid.Container justify="center"> */}
                {/* <Grid> */}
                <Modal.Content className="overflow-y-scroll h-screen">
                  <div className="flex flex-col items-center h-auto">
                    <div className="imageDiv flex flex-col h-auto">
                      <img src={clickedPost.picture} className="modalImage object-contain rounded-lg" />
                    </div>
                    <div className="flex text-center mt-4">
                      <Link
                        to={'/profilepage/' + clickedPost.user_id}
                        onClick={() => {
                          props.history.push('/profilepage/' + clickedPost.user_id);
                        }}
                      >
                        <span>{clickedPostUser.name}</span>
                      </Link>
                      <Link to={'/profilepage/' + clickedPost.id}>
                        &emsp; {clickedPost.content}&emsp;
                        </Link>
                      <LikeButton
                        likeList={likeList}
                        clickedPost={clickedPost}
                        pushToLikeList={pushToLikeList}
                        removeFromLikeList={removeFromLikeList}
                      />
                    </div>
                    {/* コメント部分ーーーーーーーーーーーーー */}
                    <div className="block">
                      <CommentApp
                        clickedPostId={clickedPost.id}
                        currentUserData={props.currentUserData}
                      />
                    </div>
                    {/* コメント部分ーーーーーーーーーーーーー */}
                  </div>
                </Modal.Content>
                {/* </Grid> */}
                {/* </Grid.Container> */}
                <Divider className="m-6" />
                <Modal.Action passive onClick={() => setModalOpen(false)}
                  className="h-5">
                  Cancel
                </Modal.Action>
              </React.Fragment>
            </Modal>
            {/*ーーーーーーーーーーーーーーーーーーーーーーーーー */}
            {/* 投稿フォームモーダル */}
            <Modal width="35rem" open={postModalOpen} onClose={postModalCloseHandler}>
              <React.Fragment>
                <Modal.Content>
                  <FormikPost
                    postModalCloseHandler={postModalCloseHandler}
                    setFilterPosts={setFilterPosts}
                    filterPosts={filterPosts}
                  />
                </Modal.Content>
                {/* <div className="bg-gray-100"> */}
                <Modal.Action
                  passive onClick={() => setPostModalOpen(false)}
                  className="bg-gray-100"
                >
                  <div>
                    Cancel

                  </div>
                </Modal.Action>
                {/* </div> */}
              </React.Fragment>
            </Modal>
            {/*ーーーーーーーーーーーーーーーーーーーーーーーーー */}
            {/* 投稿ボタン */}
            <div className="postButton fixed bottom-0 right-0 z-10 m-12">
              <button
                onClick={() => postModalOpenHandler()}
                className="transition duration-500 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110 text-white font-bold py-6 px-6 border-b-4 border-blue-700 hover:border-red-600 rounded-full cursor-pointer">
                <Icon.PlusCircle size={50} />
              </button>
            </div>
            {/* 投稿ボタン */}
            {/*ーーーーーーーーーーーーーーーーーーーーーーーーー */}
          </div>
          <Switch>
            <Route path="/"></Route>
          </Switch>
        </div>
      </Router>
    </React.Fragment >
  );
};
