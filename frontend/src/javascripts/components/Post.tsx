require('dotenv').config();

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Grid, Row, Note, Button, Divider, Spacer } from '@zeit-ui/react';
import * as Icon from '@zeit-ui/react-icons';
import User from './User';

export const Post = (props: any) => {
  return (
    <>
      <img
        key={props.post.id}
        src={props.post.picture}
        className="rounded-lg"
        onClick={() => props.modalOpenHandler(props.post)}
      />
    </>
  );
};
