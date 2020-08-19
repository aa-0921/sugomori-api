import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HomePage } from './components/HomePage';
import { BeforeLogin } from './components/BeforeLogin';

import { ZeitProvider, CssBaseline } from '@zeit-ui/react';


document.addEventListener('DOMContentLoaded', () => {

  // (function () {
  //   function onLoad() {
  //     window.resizeTo(1500, 1000);
  //   }

  //   window.addEventListener('load', function (e) {
  //     onLoad();
  //   });
  // })();
  // window.resizeTo(1500, 1000);
  const jsLoggedIn = document.getElementById('js_logged_in_component')
  const jsNotLoggedIn = document.getElementById('js_not_logged_in_component')
  if (jsLoggedIn != null) {
    console.log('jsLoggedIn')
    ReactDOM.render(
      <ZeitProvider>
        <CssBaseline />
        <HomePage />
      </ZeitProvider>,
      document.body.appendChild(jsLoggedIn),
    );
  }
  if (jsNotLoggedIn != null) {
    console.log('jsNotLoggedIn')

    ReactDOM.render(
      <ZeitProvider>
        <CssBaseline />
        <BeforeLogin />
      </ZeitProvider>,
      document.body.appendChild(jsNotLoggedIn),
    );
  }
});
