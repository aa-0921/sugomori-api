import * as React from 'react';
import { HomePage } from './components/HomePage';
import './scss/index.scss';
// import './App.scss'
import { ZeitProvider, CssBaseline } from '@zeit-ui/react';

export function App() {
  return (
    <ZeitProvider>
      <CssBaseline />
      <HomePage />
    </ZeitProvider>
  );
}
