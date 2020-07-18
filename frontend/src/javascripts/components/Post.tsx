import * as React from 'react';

export const Post = (props: any) => {
  return (
    <React.Fragment>
      <img
        key={props.post.id}
        src={props.post.picture}
        className="rounded-lg cursor-pointer"
        onClick={() => props.modalOpenHandler(props.post)}
      />
    </React.Fragment>
  );
};
