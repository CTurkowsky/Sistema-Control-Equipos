import React from 'react';
import ReactDOM from 'react-dom/client';
import { ControlApp } from './ControlApp';
import './styles.css';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ControlApp />
    </HashRouter>
  </React.StrictMode>
);
