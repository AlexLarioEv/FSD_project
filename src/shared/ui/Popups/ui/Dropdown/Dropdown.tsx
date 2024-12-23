import { FC, ReactNode } from 'react';
import { Menu } from '@headlessui/react';

import { classNames } from '@/shared/lib';
import { toggleFeatures } from '@/shared/lib/features';

import { mapDirectionClass, TPopupDirection } from '../../styles/const';
import popupStyles from '../../styles/popup.module.scss';

import styles from './Dropdown.module.scss';

type TDropdownProps = {
    className?: string;
    items: ReactNode[];
    label: ReactNode;
    direction?: TPopupDirection;
};

export const Dropdown: FC<TDropdownProps> = ({
    className,
    items,
    label,
    direction = 'bottom right',
}) => {
    const classItems = toggleFeatures({
        name: 'enableAppRedesigned',
        on: () => styles.itemsRedesigned,
        off: () => styles.items,
    });

    const classItem = toggleFeatures({
        name: 'enableAppRedesigned',
        on: () => popupStyles.itemRedesigned,
        off: () => popupStyles.item,
    });

    const classActive = toggleFeatures({
        name: 'enableAppRedesigned',
        on: () => popupStyles.activeRedesigned,
        off: () => popupStyles.active,
    });

    return (
        <Menu as="div" className={classNames(styles.Dropdown, {}, [className])}>
            <Menu.Button
                className={classNames(styles.trigger, {}, [
                    popupStyles.trigger,
                ])}
            >
                {label}
            </Menu.Button>
            <Menu.Items
                as="ul"
                className={classNames(classItems, {}, [
                    mapDirectionClass[direction],
                ])}
            >
                <>
                    {items.map((item, index) => (
                        <Menu.Item key={index}>
                            {({ active }) => (
                                <li
                                    className={classNames(classItem, {
                                        [classActive]: active,
                                    })}
                                >
                                    {item}
                                </li>
                            )}
                        </Menu.Item>
                    ))}
                </>
            </Menu.Items>
        </Menu>
    );
};
