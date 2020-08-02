import * as React from 'react';
import { Button } from '@zeit-ui/react';
import * as Icon from '@zeit-ui/react-icons';

export const LikeButton = (props: any) => {

  // clickLike,unlike
  const onClickLike = async (postId: any) => {
    const csrf = sessionStorage.getItem('X-CSRF-Token');
    const obj = {
      current_user_id: props.currentUserData.id,
      'X-CSRF-Token': csrf,
    };
    const body = JSON.stringify(obj);
    const method = 'PUT';
    const postUrl: string = '/picposts/like/' + postId;

    await fetch(postUrl, { method, body })
      .then((response) => {
        if (response.status == 200) {
          props.pushToLikeList(props.clickedPost.id);
        } else {
          throw new Error();
        }
      })
      .catch((error) => { });
  };
  const onClickUnLike = async (postId: any) => {
    const csrf = sessionStorage.getItem('X-CSRF-Token');
    const obj = {
      current_user_id: props.currentUserData.id,
      'X-CSRF-Token': csrf,
    };
    const body = JSON.stringify(obj);
    const method = 'PUT';

    const postUrl: string = '/picposts/unlike/' + postId;

    await fetch(postUrl, { method, body })
      .then((response) => {
        if (response.status == 200) {
          props.removeFromLikeList(props.clickedPost.id);
        } else {
          throw new Error();
        }
      })
      .catch((error) => { });
  };
  return (
    <React.Fragment>
      {props.likeList.includes(props.clickedPost.id) ? (
        <Button
          type="warning"
          size="mini"
          auto
          ghost
          onClick={() => onClickUnLike(props.clickedPost.id)}
        >
          <Icon.HeartFill size={12} />
                              UnLike
        </Button>
      ) : (
          <Button
            type="success"
            size="mini"
            auto
            ghost
            onClick={() => onClickLike(props.clickedPost.id)}
          >
            <Icon.Heart size={8} />
                              Like
          </Button>
        )}
    </React.Fragment >
  );
};
