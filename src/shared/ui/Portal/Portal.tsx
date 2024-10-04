import {ReactNode, FC}from 'react'
import { createPortal } from "react-dom"
import { ThemeProvider  } from '@/app'

import { ETheme } from '@/shared/contexts'
import {ELocalStorageKey}from '@/shared/const'

import 'app/styles/index.scss'

type TProps = {
    children: ReactNode;
    element?: HTMLElement
}


export const Portal: FC<TProps> = ({children, element = document.body}) => {
    const defaultTheme = localStorage.getItem(ELocalStorageKey.THEME) as ETheme || ETheme.LIGHT;

    const content = <ThemeProvider value={defaultTheme}>{children}</ThemeProvider>

    return createPortal(content, element)
}