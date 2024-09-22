import { FC, useMemo,useState } from "react";
import {ThemeContext, ETheme, IThemeContextProps, LOCAL_STORAGE_THEME_KEY } from './ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme || ETheme.LIGHT;

export const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<ETheme>(defaultTheme);

    const defaultProps = useMemo<IThemeContextProps>(() => ({theme, setTheme}),[theme, setTheme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>)
}