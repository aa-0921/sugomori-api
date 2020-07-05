import * as React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

interface Props {
  // error: string;
  // apiResponse: string;
  url: string;
}

// export function TakeApi(props: Props) {

export const getPostList = (props: Props) => {
  const [error, setError] = useState(null);
  const [apiResponse, setApiResponse] = useState('');

  // public static defaultProps: Props = {
  //   color: "blue",
  //   type: "button",
  // };

  useEffect(() => {
    // fetch(props.url)

    const csrf = sessionStorage.getItem('X-CSRF-Token');
    const obj = {
      'X-CSRF-Token': csrf,
    };
    const body = JSON.stringify(obj);
    fetch('/posts', { body })
      .then((res) => res.json())
      .then(
        (result) => {
          setApiResponse(result);
        },
        (error) => {
          setApiResponse(error);
          throw new Error('error');
        },
        // .catch(error => console.error('Error:', error));
      );
    return () => {
      <React.Fragment>getPostList: {apiResponse}</React.Fragment>;
    };
  });
};
