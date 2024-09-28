import { Component, ErrorInfo, ReactNode, Suspense } from "react";

import{ ErrorPage } from 'pages/ErrorPage/ui'

type TProps = {
    children: ReactNode
}

type TState = {
    hasError: boolean
}


export class ErrorBoundary extends Component<TProps,TState> {
    constructor(props: TProps) {
        super(props);
        this.state = { hasError: false };
    }
  
    static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
  
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }
  
    render() {
        const {hasError} = this.state
        const {children} = this.props

        if (hasError) {
            // You can render any custom fallback UI
            return <Suspense fallback=''><ErrorPage/></Suspense>;
        }
  
        return children; 
    }
}