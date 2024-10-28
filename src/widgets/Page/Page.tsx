import { FC, MutableRefObject, PropsWithChildren, useRef, UIEventHandler } from "react";

import { classNames } from "@/shared/lib";
import { getScrollByPath, scrollSaveActions } from "@/features/ScrollSave";
import { useAppDispatch, useAppSelector, useInfiniteScroll, useInitEffect, useThrottle } from '@/shared/hooks'

import styles from './Page.module.scss';
import { useLocation } from "react-router-dom";

type TPageProps = {
    className?: string;
    onScrollEnd?: () => void;
};

export const Page: FC<PropsWithChildren<TPageProps>> = ({ className, children, onScrollEnd }) => {
    const {pathname} = useLocation();
    const dispatch = useAppDispatch();
    const scrollPosition = useAppSelector(state => getScrollByPath(state ,pathname));
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLElement>;

    useInitEffect(()=> {
        wrapperRef.current.scrollTop = scrollPosition;
    })
    
    const handleScroll: UIEventHandler<HTMLElement> = useThrottle((e) => {
        dispatch(scrollSaveActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname
        }))
    }, 500)

    useInfiniteScroll({triggerRef, wrapperRef, callback: onScrollEnd})

    return (
        <section onScroll={handleScroll} ref={wrapperRef} className={classNames(styles.Page, {}, [className])}>
            {children}
            <div ref={triggerRef as MutableRefObject<HTMLDivElement>} />
        </section>
    );
};