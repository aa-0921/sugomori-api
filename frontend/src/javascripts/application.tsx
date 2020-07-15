import * as React from 'react';
import ReactDOM from 'react-dom';

import { HomePage } from './components/HomePage';

import { ZeitProvider, CssBaseline } from '@zeit-ui/react';
import { LoginApp } from '../javascripts/pages/LoginApp';


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
        <beforeLogin />
      </ZeitProvider>,
      document.body.appendChild(jsNotLoggedIn),
    );
  }
});
