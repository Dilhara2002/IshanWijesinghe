import React from 'react';
// Use the new client API for React 18+ / React 19
import ReactDOM from 'react-dom/client'; 
// Import your main application component
import App from './App'; 
// Import your main CSS file (optional, but standard)
import './index.css'; 

// Get the root element from public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);