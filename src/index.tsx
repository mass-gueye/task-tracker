import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TodoProvider from './context/TodoProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  // </React.StrictMode>
);


