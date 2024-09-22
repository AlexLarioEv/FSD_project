import { useContext } from 'react';
import {IThemeContextProps, ThemeContext, ETheme, LOCAL_STORAGE_THEME_KEY} from '../hoc';

export const useTheme = () : IThemeContextProps=> {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {theme, setTheme: toggleTheme}
}