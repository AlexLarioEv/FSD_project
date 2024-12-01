import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ETheme } from '@/shared/contexts';
import { ELocalStorageKey } from '@/shared/const';

import { App, ThemeProvider } from '@/app';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider';

import './shared/config/i18';
import './app/styles/index.scss';

const defaultTheme =
    (localStorage.getItem(ELocalStorageKey.THEME) as ETheme) || ETheme.LIGHT;
const container = document.getElementById('root');

if (!container) {
    throw new Error(
        'Контейнер root не найден. Не удалось вмонтировать рект приложение',
    );
}

const root = createRoot(container);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider value={defaultTheme}>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
