import * as React from 'react';
import { UserList } from './UserList';
import { Spacer } from '@zeit-ui/react';

export const MemberList = (props: any): any => {
  return (
    <React.Fragment>
      <Spacer y={1.5} />
      <div>
        {props.fetchUsers.map((user: any, index: number) => (
          <div key={index} className="list">
            <UserList
              user={user}
              followUsersList={props.followUsers}
              pushToFollowUsers={props.pushToFollowUsers}
              removeFromFollowUsers={props.removeFromFollowUsers}
            />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};
