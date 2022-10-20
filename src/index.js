import React from 'react';
import ReactDOM from 'react-dom/client';

import './style.css';

import Movies from './components/Movies';

function App() {
  return <Movies />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
