import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DarkmodeProvider from './DarkmodeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DarkmodeProvider>
    <App />
  </DarkmodeProvider>
);


