import App from "./App";
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'

import {ThemeProvider} from './theme'

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);