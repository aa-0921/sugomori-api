import * as React from 'react';
import { Grid, Row, Note, Button } from '@zeit-ui/react';

export const Profile = () => {
  const clickFollowUser = async (followUserId: any) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log('followUserId:', followUserId);
    }

    const csrf = sessionStorage.getItem('X-CSRF-Token');
    const obj = {
      followUserId: followUserId,
      'X-CSRF-Token': csrf,
    };
    const body = JSON.stringify(obj);
    const method = 'PUT';

    const headers = {
      'Content-Type': 'application/json',
    };
    const postUrl: string = process.env.REACT_APP_API_URL_POSTS!;
    if (process.env.NODE_ENV !== 'production') {
      console.log('postUrl:', postUrl);
    }
    await fetch(postUrl, { method, headers, body });
  };
  return (
    <div className="bg-white shadow p-4 rounded lg:w-64">
      <div className="text-center mt-4">
        <p className="text-gray-600 font-bold">Name</p>
        <p className="text-sm font-hairline text-gray-600 mt-1">Subtitle</p>
      </div>
      <div className="flex justify-center mt-4">
        <img className="shadow sm:w-12 sm:h-12 w-10 h-10 rounded-full" src="" alt="Avatar" />
      </div>
      <div className="mt-6 flex justify-between text-center">
        <div>
          <p className="text-gray-700 font-bold">20</p>
          <p className="text-xs mt-2 text-gray-600 font-hairline">Posts</p>
        </div>
        <div>
          <p className="text-gray-700 font-bold">99k</p>
          <p className="text-xs mt-2 text-gray-600 font-hairline">Likes</p>
        </div>
        <div>
          <p className="text-gray-700 font-bold">530</p>
          <p className="text-xs mt-2 text-gray-700 font-hairline">Shares</p>
        </div>
      </div>
      <div className="mt-6">
        <button className="rounded shadow-md w-full items-center  bg-blue-500 px-4 py-2 text-white hover:bg-blue-400">
          Follow
        </button>
      </div>
    </div>
  );
};
