import { FC, MutableRefObject, PropsWithChildren, useRef } from "react";

import { classNames } from "@/shared/lib";
import { useInfiniteScroll } from '@/shared/hooks'

import styles from './Page.module.scss';

type TPageProps = {
    className?: string;
    onScrollEnd?: () => void;
};

export const Page: FC<PropsWithChildren<TPageProps>> = ({ className, children, onScrollEnd }) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>
    const triggerRef = useRef() as MutableRefObject<HTMLElement>

    useInfiniteScroll({triggerRef, wrapperRef, callback: onScrollEnd})

    return (
        <section ref={wrapperRef} className={classNames(styles.Page, {}, [className])}>
            {children}
            <div ref={triggerRef as MutableRefObject<HTMLDivElement>} />
        </section>
    );
};