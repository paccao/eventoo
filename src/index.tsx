import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import AppState from './context/AppState';
import UiState from './context/UiState';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <UiState>
                <AppState>
                    <App />
                </AppState>
            </UiState>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);
