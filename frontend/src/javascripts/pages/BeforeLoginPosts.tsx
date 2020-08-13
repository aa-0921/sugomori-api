import * as React from 'react';
import { useState, useEffect } from 'react';
import { FetchData } from '../api/FetchData'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { PostList } from '../components/PostList';

import { Modal, Spacer, Divider, Row, Slider, Collapse, Tooltip, Popover, Text } from '@zeit-ui/react';
import * as Icon from '@zeit-ui/react-icons';
import { ClarifaiTagList } from '../components/ClarifaiTagList';
import { ClarifaiApp } from '../api/ClarifaiApp'



export const BeforeLoginPosts = (props: any) => {
  // 全投稿の配列のState定義
  const [fetchPosts, setFetchPosts] = useState([]);
  const [initialFetchPosts, setInitialFetchPosts] = useState([]);
  // 検索のfilter後の投稿の配列の定義
  const [filterPosts, setFilterPosts] = useState([]);


  const [clarifaiTags, setClarifaiTags] = useState([])
  const getAllPostUrl: string = '/picposts?type=thumb';
  useEffect(() => {
    FetchData(getAllPostUrl).then((res) => {
      setFetchPosts(res.data);
      setInitialFetchPosts(res.data);
    });
  }, []);


  useEffect(() => {
    setFilterPosts(fetchPosts);
  }, [fetchPosts]);

  const filterList = (e: any) => {
    const updateList = initialFetchPosts.filter((post: any) => {
      return post.content.search(e.target.value) !== -1;
    });
    setFetchPosts(updateList);
  };

  const [clickedPostUser, setClickedPostUser] = useState({
    id: 0,
    name: '',
  });

  const [clickedPost, setClickedPost] = useState({
    id: 0,
    picture: '',
    content: '',
    user_id: 0,
    thumbnail: ''
  });

  // modal,open,close
  const [modalOpen, setModalOpen] = useState(false);
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

  const getClickedPostUserUrl: string = '/users/' + clickedPost.user_id;
  useEffect(() => {
    if (clickedPost.user_id != 0 && clickedPost.user_id != undefined) {
      FetchData(getClickedPostUserUrl).then((res) => setClickedPostUser(res.data));
    }
  }, [clickedPost]);



  // Slider関連
  const [columnWidthValue, setColumnWidthValue] = useState(300)
  const columnWidthHandler = (val: any) => {
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
  }, [clickedPost])

  return (
    <React.Fragment>
      <Router>
        <div className="relative">
          <div className="About absolute z-10  w-screen">
            <div>
              <div className="collapseWrap mt-50 pt-5 h-30">
                <Collapse.Group className="z-20 mr-5 mt-10">
                  <Collapse title=" " initialVisible>
                    <Text></Text>
                    <div className="bg-white flex justify-center items-center h-10">
                      <span className="wr-10 pr-5">
                        <Icon.Maximize2 size={25} />
                      </span>
                      <Row style={{ width: '75%' }}>
                        <Slider
                          className="postWidthSlider"
                          value={columnWidthValue}
                          onChange={columnWidthHandler}
                          step={20} max={400} min={100} initialValue={300}
                        />
                      </Row>
                      <Text></Text>
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
                <Modal.Content className="overflow-y-scroll h-screen z-10">
                  <div className="flex flex-col items-center h-auto">
                    <div className="imageDiv flex flex-col h-auto">    {clickedPost.picture != '' ? (
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
