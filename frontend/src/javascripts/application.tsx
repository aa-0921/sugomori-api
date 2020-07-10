import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HomePage } from './components/HomePage';
<<<<<<< HEAD
import '../stylesheets/scss/index.scss';
import { PostsApp } from '../javascripts/pages/PostsApp';
=======
>>>>>>> fix/webpack-errors

import { ZeitProvider, CssBaseline } from '@zeit-ui/react';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ZeitProvider>
      <CssBaseline />
<<<<<<< HEAD
      <HomePage />,{/* // <PostsApp />, */}
=======
      <HomePage />
>>>>>>> fix/webpack-errors
    </ZeitProvider>,
    document.body.appendChild(document.createElement('div')),
  );
});
