import * as React from 'react';

export const Post = (props: any) => {
  return (
    <React.Fragment>
      <div className="">
        <img
          key={props.post.id}
          src={props.post.picture}
          className="rounded-lg cursor-pointer transform hover:scale-105 hover:skew-y-3 hover:translate-y-1 duration-500 ease-out"
          onClick={() => props.modalOpenHandler(props.post)}
        />

      </div>

    </React.Fragment>
  );
};
