import * as React from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';

export const Post = (props: any) => {
  console.log('props.post.picture', props.post.picture)
  console.log('props.post.thumbnail', props.post.thumbnail)

  return (
    <React.Fragment>
      <Tilt
        tiltReverse={true}
        glareEnable={true}
        glareMaxOpacity={0.45}
        glarePosition="all"
        scale={1.08}
      >
        <img
          key={props.post.id}
          src={props.post.thumbnail}
          className="rounded-lg cursor-pointer"
        />
      </Tilt>
    </React.Fragment>
  );
};
