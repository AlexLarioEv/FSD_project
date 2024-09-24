import { createRoot } from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'

import {App, ThemeProvider} from "./app";
import {ErrorBoundary} from './app/providers/ErrorBoundary'

import './shared/config/i18';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
);