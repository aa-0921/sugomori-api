import React from 'react';
import { Post } from './Post';
import { Spacer } from '@zeit-ui/react';
import sizeMe from 'react-sizeme';
// @ts-ignore
import StackGrid, { transitions } from 'react-stack-grid';

const { scaleDown } = transitions;
export const PostList = (props: any): any => {
  return (
    <>
      <Spacer y={1.5} />
      <div>
        <StackGrid
          columnWidth={300}
          gutterWidth={20}
          gutterHeight={40}
          // duration={700}
          monitorImagesLoaded={true}
          // appearDelay={30}
          // appear={scaleDown.appear}
          // appeared={scaleDown.appeared}
          // enter={scaleDown.enter}
          // entered={scaleDown.entered}
          // leaved={scaleDown.leaved}
        >
          {props.fetchPosts.map((post: any) => (
            <Post
              post={post}
              likeList={props.likeList}
              pushToLikeList={props.pushToLikeList}
              removeFromLikeList={props.removeFromLikeList}
              modalOpenHandler={props.modalOpenHandler}
            />
          ))}
        </StackGrid>
      </div>
    </>
  );
};
