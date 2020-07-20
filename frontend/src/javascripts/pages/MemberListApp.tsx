

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { MemberList } from '../components/MemberList';
import { FetchData } from '../api/FetchData';

export const MemberListApp = (props: any) => {
  const [fetchUsers, setFetchUsers] = useState([]);
  const [followUsers, setFollowUsers] = useState([]);

  // 開発時点ではログイン処理を飛ばしている為、ID1で固定。後々修正
  const currentUserId = props.currentUserData.id;
  const getFollowListUrl: string = `/users/follow_list/${currentUserId}`;
  useEffect(() => {
    FetchData(getFollowListUrl).then((res) => {
      setFollowUsers(res.data.map((el: any) => el.id));
    });
  }, [props.currentUserData]);

  const pushToFollowUsers = (target: number) => {
    console.log(target, 'ma');
    const arr = Array.from(followUsers);
    arr.push(target);
    setFollowUsers(arr);
  };

  const removeFromFollowUsers = (target: number) => {
    const arr = Array.from(followUsers);
    const nextFollowUsers = arr.filter((el) => el !== target);
    setFollowUsers(nextFollowUsers);
  };

  const fetchUsersUrl: string = '/users';

  useEffect(() => {
    FetchData(fetchUsersUrl).then((res) => setFetchUsers(res.data));
  }, []);
  return (
    <React.Fragment>
      <Router>
        <div>
          <span>
            <MemberList
              {...props}
              fetchUsers={fetchUsers}
              followUsers={followUsers}
              pushToFollowUsers={pushToFollowUsers}
              removeFromFollowUsers={removeFromFollowUsers}
              currentUserData={props.currentUserData}
            />
          </span>

          <Switch>
            <Route path="/"></Route>
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
};
