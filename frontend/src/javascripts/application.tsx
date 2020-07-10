import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HomePage } from './components/HomePage';
import '../stylesheets/scss/index.scss';
import { PostsApp } from '../javascripts/pages/PostsApp';

import { ZeitProvider, CssBaseline } from '@zeit-ui/react';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ZeitProvider>
      <CssBaseline />
      <HomePage />,{/* // <PostsApp />, */}
    </ZeitProvider>,
    document.body.appendChild(document.createElement('div')),
  );
});
