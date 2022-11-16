// IMPORTS
import React from 'react';
import {createRoot} from 'react-dom/client';

import App from './App'

// RENDER
const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

// const [context, setContext] = useState("default context value");

root.render(
    <React.StrictMode >
        <App />
    </React.StrictMode >
);
