import * as React from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
import { Grid, Row, Note, Button, Divider, Spacer } from '@zeit-ui/react';
import * as Icon from '@zeit-ui/react-icons';

export const FollowButton = (props: any) => {
  return (
    <div>
      {props.followUsersList.includes(props.user.id) ? (
        <Button
          type="warning"
          size={props.buttonSize}
          auto
          ghost
          onClick={() => props.onClickUnFollow(props.user.id)}
          className="m-auto"
        >
          <Icon.EyeOff size={16} />
                  UnFollow
        </Button>
      ) : (
          <Button
            type="success"
            size={props.buttonSize}
            auto
            ghost
            onClick={() => props.onClickFollow(props.user.id)}
          >
            <Icon.Eye size={16} />
                  Follow
          </Button>
        )}
    </div >
  );
};
