import * as React from 'react';
import ReactDOM from 'react-dom';

import { HomePage } from './components/HomePage';
import './scss/index.scss';
// import './App.scss'
import { ZeitProvider, CssBaseline } from '@zeit-ui/react';

// export function App() {
//   return (
//     <ZeitProvider>
//       <CssBaseline />
//       <HomePage />
//     </ZeitProvider>
//   );
// }
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ZeitProvider>
      <CssBaseline />
      <HomePage />
    </ZeitProvider>,
    document.body.appendChild(document.createElement('div')),
  );
});
