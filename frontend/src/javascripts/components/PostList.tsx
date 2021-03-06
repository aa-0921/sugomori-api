import * as React from 'react';
import { useState, useEffect } from 'react';
import { Post } from './Post';
import { Spacer } from '@zeit-ui/react';
import StackGrid, { transitions } from 'react-stack-grid';
export const PostList = (props: any): any => {
  const [gutterWidth, setGutterWidth] = useState(20);
  const [gutterHeight, setGutterHeight] = useState(40);

  useEffect(() => {
    if (props.columnWidthValue <= 300) {
      setGutterWidth(props.columnWidthValue / 15)
      setGutterHeight(props.columnWidthValue / 7)
    }
  }, [props.columnWidthValue])


  return (
    <React.Fragment>
      <Spacer y={1.5} />
      <div>
        <StackGrid
          columnWidth={props.columnWidthValue}
          gutterWidth={gutterWidth}
          gutterHeight={gutterHeight}
          monitorImagesLoaded={true}
        >
          {props.filterPosts.map((post: any, index: number) => (
            <div key={index} className="list"
              onClick={() => props.modalOpenHandler(post)}
            >
              <Post
                post={post}
                likeList={props.likeList}
                pushToLikeList={props.pushToLikeList}
                removeFromLikeList={props.removeFromLikeList}
                modalOpenHandler={props.modalOpenHandler}
              />
            </div>
          ))}
        </StackGrid>
      </div>
    </React.Fragment>
  );
};
