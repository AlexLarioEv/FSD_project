import { createRoot } from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import { ETheme, LOCAL_STORAGE_THEME_KEY } from 'shared/contexts'

import {App, ThemeProvider} from "./app";
import {ErrorBoundary} from './app/providers/ErrorBoundary'

import './shared/config/i18';
import './app/styles/index.scss'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme || ETheme.LIGHT;
const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider value={defaultTheme} >
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>
);