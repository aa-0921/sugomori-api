import * as React from 'react';
import ReactDOM from 'react-dom';

import { HomePage } from './components/HomePage';

import { ZeitProvider, CssBaseline } from '@zeit-ui/react';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ZeitProvider>
      <CssBaseline />
      <HomePage />
    </ZeitProvider>,
    document.body.appendChild(document.createElement('div')),
  );
});
