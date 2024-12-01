import { MutableRefObject, useEffect } from 'react';

export type TUseInfiniteScrollOption = {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
};

export const useInfiniteScroll = ({
    callback,
    wrapperRef,
    triggerRef,
}: TUseInfiniteScrollOption) => {
    useEffect(() => {
        let observe: IntersectionObserver | null = null;
        const wrapper = wrapperRef.current;
        const trigger = triggerRef.current;

        if (callback) {
            const options = {
                root: wrapper,
                rottMargin: '0px',
                threshold: 1.0,
            };

            observe = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observe.observe(trigger);
        }

        return () => {
            if (observe && trigger) {
                observe.unobserve(trigger);
            }
        };
    }, [triggerRef, wrapperRef, callback]);
};
