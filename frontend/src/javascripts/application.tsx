import * as React from 'react';
import ReactDOM from 'react-dom';

import { HomePage } from './components/HomePage';
import { BeforeLogin } from './components/BeforeLogin';

import { ZeitProvider, CssBaseline } from '@zeit-ui/react';

document.addEventListener('DOMContentLoaded', () => {
  const jsLoggedIn = document.getElementById('js_logged_in_component')
  const jsNotLoggedIn = document.getElementById('js_not_logged_in_component')
  if (jsLoggedIn != null) {
    ReactDOM.render(
      <ZeitProvider>
        <CssBaseline />
        <HomePage />
      </ZeitProvider>,
      document.body.appendChild(jsLoggedIn),
    );
  }
  if (jsNotLoggedIn != null) {
    ReactDOM.render(
      <ZeitProvider>
        <CssBaseline />
        <BeforeLogin />
      </ZeitProvider>,
      document.body.appendChild(jsNotLoggedIn),
    );
  }
});
