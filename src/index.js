import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';

// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


// import { createRoot } from 'react-dom/client';
// const domNode = document.getElementById('root');
// const root = createRoot(domNode);
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
