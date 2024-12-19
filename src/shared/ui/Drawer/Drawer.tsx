import { ReactNode, useCallback, useEffect, FC } from 'react';
import { classNames } from '@/shared/lib';
import { AnimationProvider, useAnimationLibs } from '@/shared/lib/components';

import Overlay from '../Overlay/Overlay';
import styles from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { toggleFeatures } from '@/shared/lib/features';

type TDrawerProps = {
    className?: string;
    children: ReactNode;
    isOpen: boolean;
    onClose?: () => void;
};

const height = window.innerHeight - 100;

const DrawerContent: FC<TDrawerProps> = ({
    className,
    children,
    onClose,
    isOpen = false,
}) => {
    const { Spring, Gesture } = useAnimationLibs();

    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);

    useEffect(() => {
        if (isOpen) {
            openDrawer();
        }
    }, [api, isOpen, openDrawer]);

    const close = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...Spring.config.stiff, velocity },
            onResolve: onClose,
        });
    };

    const bind = Gesture.useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            movement: [, my],
            cancel,
        }) => {
            if (my < -70) cancel();

            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    close();
                } else {
                    openDrawer();
                }
            } else {
                api.start({ y: my, immediate: true });
            }
        },
        {
            from: () => [0, y.get()],
            filterTaps: true,
            bounds: { top: 0 },
            rubberband: true,
        },
    );

    const sheetClass = toggleFeatures({
        name: 'enableAppRedesigned',
        on: () => styles.sheetRedesigned,
        off: () => styles.sheet,
    });

    if (!isOpen) {
        return null;
    }

    const display = y.to((py) => (py < height ? 'block' : 'none'));

    return (
        <Portal>
            <div className={classNames(styles.Drawer, {}, [className])}>
                <Overlay />
                <Spring.a.div
                    className={sheetClass}
                    style={{
                        display,
                        bottom: `calc(-100vh + ${height - 100}px)`,
                        y,
                    }}
                    {...bind()}
                >
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    );
};

const AsyncDrawer: FC<TDrawerProps> = (props) => {
    const { isLoaded } = useAnimationLibs();

    if (!isLoaded) {
        return null;
    }

    return <DrawerContent {...props} />;
};

export const Drawer: FC<TDrawerProps> = (props) => {
    return (
        <AnimationProvider>
            <AsyncDrawer {...props} />
        </AnimationProvider>
    );
};
