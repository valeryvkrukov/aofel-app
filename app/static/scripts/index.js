import { createRoot } from 'react-dom/client';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

import App from './App';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);