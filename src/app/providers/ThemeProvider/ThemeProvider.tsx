import { FC, ReactNode, useEffect, useMemo,useState } from "react";
import {ThemeContext, ETheme, IThemeContextProps } from '@/shared/contexts';


type TProps = {
  value: ETheme;
  children: ReactNode
}

export const ThemeProvider: FC<TProps> = ({children, value}) => {
    const [theme, setTheme] = useState<ETheme>(value);
    const defaultProps = useMemo<IThemeContextProps>(() => ({theme, setTheme}),[theme, setTheme])

    useEffect(()=> {
        setTheme(value)
    },[value])

    useEffect(()=> {
        document.body.className = '';

        document.body.classList.add(theme);
    },[theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}