import { FC, ReactNode, useEffect, useMemo,useState } from "react";
import {ThemeContext, ETheme, IThemeContextProps } from 'shared/contexts';


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

    return (
        <ThemeContext.Provider value={defaultProps}>
            <div className={theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}