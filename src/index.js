import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';

ReactDOM.createRoot(
    document.getElementById('app'),
  )
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );