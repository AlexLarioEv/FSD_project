import {ReactNode, FC}from 'react'
import { createPortal } from "react-dom"
import { ThemeProvider  } from 'app'
import { ETheme, LOCAL_STORAGE_THEME_KEY } from 'shared/contexts'

type TProps = {
    children: ReactNode;
    element?: HTMLElement
}


export const Portal: FC<TProps> = ({children, element = document.body}) => {
    const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme || ETheme.LIGHT;

    const content = <ThemeProvider value={defaultTheme}>{children}</ThemeProvider>

    return createPortal(content, element)
}