import { createContext } from 'react';
import { ELocalStorageKey } from '../const';

export enum ETheme {
    LIGHT = 'light',
    DARK = 'dark',
}

export interface IThemeContextProps {
    theme: ETheme;
    setTheme?: (theme: ETheme) => void;
}

const theme =
    localStorage.getItem(ELocalStorageKey.THEME) === ETheme.LIGHT
        ? ETheme.LIGHT
        : ETheme.DARK;

export const ThemeContext = createContext<IThemeContextProps>({ theme });
