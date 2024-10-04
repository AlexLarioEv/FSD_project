import { useContext } from 'react';

import {IThemeContextProps, ThemeContext, ETheme} from '../contexts';
import {ELocalStorageKey} from '../const/localStorage'

export const useTheme = () : IThemeContextProps=> {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK
        setTheme(newTheme)
        localStorage.setItem(ELocalStorageKey.THEME, newTheme)
    }

    return {theme, setTheme: toggleTheme}
}