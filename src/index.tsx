import { createRoot } from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'

import {App, ThemeProvider} from "./app";

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);