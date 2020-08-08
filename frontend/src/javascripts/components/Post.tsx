import * as React from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';

export const Post = (props: any) => {
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
          src={props.post.picture}
          className="rounded-lg cursor-pointer"
        // className="rounded-lg cursor-pointer transform hover:scale-105 hover:skew-y-3 hover:translate-y-1 duration-500 ease-out"
        />
      </Tilt>
    </React.Fragment>
  );
};
