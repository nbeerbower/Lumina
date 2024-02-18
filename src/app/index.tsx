import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './components/Router'
import './index.css'

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Router />
    </React.StrictMode>,
  );
} else {
  console.error("Could not find root element");
}

