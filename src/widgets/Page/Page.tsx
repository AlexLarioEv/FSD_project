import {
    FC,
    MutableRefObject,
    PropsWithChildren,
    useRef,
    UIEventHandler,
} from 'react';

import { classNames } from '@/shared/lib';
import { getScrollByPath, scrollSaveActions } from '@/features/ScrollSave';
import {
    useAppDispatch,
    useAppSelector,
    useInfiniteScroll,
    useInitEffect,
    useThrottle,
} from '@/shared/lib/hooks';

import styles from './Page.module.scss';
import { useLocation } from 'react-router-dom';
import { TTestProps } from '@/shared/lib/types';
import { toggleFeatures } from '@/shared/lib/features';

type TPageProps = {
    className?: string;
    onScrollEnd?: () => void;
} & TTestProps;

export const Page: FC<PropsWithChildren<TPageProps>> = (props) => {
    const { className, children, onScrollEnd } = props;
    const { pathname } = useLocation();
    const dispatch = useAppDispatch();
    const scrollPosition = useAppSelector((state) =>
        getScrollByPath(state, pathname),
    );
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLElement>;

    useInitEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const handleScroll: UIEventHandler<HTMLElement> = useThrottle((e) => {
        dispatch(
            scrollSaveActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: pathname,
            }),
        );
    }, 500);

    useInfiniteScroll({ triggerRef, callback: onScrollEnd });

    const classPage = toggleFeatures({
        name: 'enableAppRedesigned',
        on: () => styles.PageRedesigned,
        off: () => styles.Page,
    });

    return (
        <main
            data-testid={props['data-testid'] ?? 'Page'}
            onScroll={handleScroll}
            ref={wrapperRef}
            className={classNames(classPage, {}, [className])}
        >
            {children}
            <div ref={triggerRef as MutableRefObject<HTMLDivElement>} />
        </main>
    );
};
