import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 uses react-dom/client
import { BrowserRouter } from 'react-router-dom'; // If using React Router
import App from './App'; // Import the root App component

// Create a root and render the app component into the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
