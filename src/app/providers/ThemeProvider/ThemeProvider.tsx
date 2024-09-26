import { FC, ReactNode, useMemo,useState } from "react";
import {ThemeContext, ETheme, IThemeContextProps, LOCAL_STORAGE_THEME_KEY } from 'shared/contexts';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme || ETheme.LIGHT;

type TProps = {
  children: ReactNode
}

export const ThemeProvider: FC<TProps> = ({children}) => {
  const [theme, setTheme] = useState<ETheme>(defaultTheme);

  const defaultProps = useMemo<IThemeContextProps>(() => ({theme, setTheme}),[theme, setTheme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>)
}