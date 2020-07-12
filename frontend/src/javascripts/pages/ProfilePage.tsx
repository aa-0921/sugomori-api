// import { Grid, Row, Note, Button } from '@zeit-ui/react';
import * as React from 'react';

import { useState, useEffect } from 'react';
import { Card, Spacer, Modal, Button, Grid, Divider } from '@zeit-ui/react';
import { FetchData } from '../api/FetchData'

export const ProfilePage = (props) => {
  // const [fetchUser, setFetchUser] = useState({});
  const [fetchUser, setFetchUser] = useState({
    id: 0,
    name: '',
  });

  const getAllPostUrl: string = `/users/${props.match.params.id}`;

  useEffect(() => {
    FetchData(getAllPostUrl).then((res) => {
      setFetchUser(res.data);
    });
  }, []);
  return (
    <React.Fragment>
      < Spacer y={1} />


      <Card shadow>
        <h1>{props.match.params.id}</h1>

        <h4>{fetchUser.name}</h4>

        <p>自己紹介</p>
      </Card>
    </React.Fragment>

  );
}
