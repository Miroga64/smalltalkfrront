import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppStoreProvider } from './contexts/appStoreContext';
import { BottomControlProvider } from './contexts/bottomControlContext';
import { CurtainControlProvider } from './contexts/curtainControlContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    // <React.StrictMode>
        <AppStoreProvider>
                <BottomControlProvider>
                    <CurtainControlProvider>
                        <App />
                    </CurtainControlProvider>
                </BottomControlProvider>
        </AppStoreProvider>
    // </React.StrictMode>
);
