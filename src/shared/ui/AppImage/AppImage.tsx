import { TTestProps } from "@/shared/lib/types";
import { FC, ImgHTMLAttributes, ReactElement, useLayoutEffect, useState } from "react"

type TProps = {
    fallbackLoading?: ReactElement;
    fallbackError?: ReactElement;
} & ImgHTMLAttributes<HTMLImageElement> & TTestProps

export const AppImage:FC<TProps> = (props) => {
    const { fallbackLoading, fallbackError, src = '', alt, ...otherProps} = props;
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isError, setIsError ] = useState(false);
    
    useLayoutEffect(()=> {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setIsLoading(false);
        }

        img.onerror = () => {
            setIsLoading(false);
            setIsError(true);
        }

    },[src])


    if(isLoading && fallbackLoading) {
        return fallbackLoading;
    }

    if(isError && fallbackError) {
        return fallbackError;
    }

    return <img data-testod={props["data-testid"] ?? "image"} src={src} alt={alt} {...otherProps}/>
}