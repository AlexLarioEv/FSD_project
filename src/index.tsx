import { createRoot } from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'

import {App, ThemeProvider} from "./app";

import './shared/config/i18';

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);