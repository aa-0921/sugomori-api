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
import { PostModal } from '../components/PostModal';


export const BeforeLoginPosts = (props: any) => {
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
  }, []);

  // 開発時点ではログイン処理を飛ばしている為、ID1で固定。後々修正
  const currentUserId = 1;



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
    const target = document.getElementById('header')
    target.classList.add('head-animation');
  };
  const closeHandler = () => {
    setModalOpen(false);
    const target = document.getElementById('header')
    target.classList.remove('head-animation');
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



  // Slider関連
  const [columnWidthValue, setColumnWidthValue] = useState(300)
  const columnWidthHandler = (val: any) => {
    console.log(val)
    setColumnWidthValue(val)
  }

  // headerHidden
  (function () {
    const target = document.getElementById('header'),
      height = 56;

    let offset = 0,
      lastPosition = 0,
      ticking = false;
    function onScroll(lastPosition: any) {

      if (lastPosition > height) {
        if (lastPosition > offset) {
          target.classList.add('head-animation');
        } else {
          target.classList.remove('head-animation');
        }
        offset = lastPosition;
      }
    }

    window.addEventListener('scroll', function (e) {
      lastPosition = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function () {
          onScroll(lastPosition);
          ticking = false;
        });
        ticking = true;
      }
    });
  })();


  return (
    <React.Fragment>
      <Router>
        <div>
          <div>
            <div>
              <div className="collapseWrap mt-18 pt-5">
                <Collapse.Group className="z-20 mr-5 mt-10">
                  <Collapse title=" " className="h-1 text-base">
                    <Text>
                      <div className="bg-white flex justify-center items-center">
                        <span className="wr-10 pr-5">
                          <Icon.Maximize2 size={25} />
                        </span>
                        <Row style={{ width: '75%' }}>
                          <Slider
                            value={columnWidthValue} onChange={columnWidthHandler}
                            step={20} max={500} min={100} initialValue={300}
                          />
                        </Row>
                      </div>
                    </Text>
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
                      <span>{clickedPostUser.name}</span>
                        &emsp; {clickedPost.content}&emsp;
                    </div>
                  </div>
                </Modal.Content>
                <Divider className="m-6" />
                <Modal.Action passive onClick={() => setModalOpen(false)}
                  className="h-5">
                  Cancel
                </Modal.Action>
              </React.Fragment>
            </Modal>
          </div>
          <Switch>
            <Route path="/"></Route>
          </Switch>
        </div>
      </Router>
    </React.Fragment >
  );
};
