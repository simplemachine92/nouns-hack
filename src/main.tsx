// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigurableApolloProvider } from './contexts/ConfigurableApolloProvider.tsx';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigurableApolloProvider>
      <App />
    </ConfigurableApolloProvider>
  </React.StrictMode>,
);