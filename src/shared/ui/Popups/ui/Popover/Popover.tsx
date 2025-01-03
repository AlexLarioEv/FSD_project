import { FC, PropsWithChildren, ReactNode } from 'react';

import { classNames } from '@/shared/lib';
import { Popover as HPopover } from '@headlessui/react';
import { mapDirectionClass, TPopupDirection } from '../../styles/const';

import styles from './Popover.module.scss';
import popupStyles from '../../styles/popup.module.scss';
import { toggleFeatures } from '@/shared/lib/features';

type HPopoverProps = {
    className?: string;
    direction?: TPopupDirection;
    trigger: ReactNode;
};

export const Popover: FC<PropsWithChildren<HPopoverProps>> = ({
    className,
    children,
    direction = 'bottom right',
    trigger,
}) => {
    const optionsClasses = [mapDirectionClass[direction]];

    const classPanel = toggleFeatures({
        name: 'enableAppRedesigned',
        on: () => styles.panelRedesigned,
        off: () => styles.panel,
    });

    return (
        <HPopover className={classNames(styles.Popover, {}, [className])}>
            <HPopover.Button as="div" className={popupStyles.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel
                className={classNames(classPanel, {}, optionsClasses)}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
};
