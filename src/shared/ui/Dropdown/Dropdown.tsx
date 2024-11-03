import { FC, ReactNode } from 'react';
import { Menu } from '@headlessui/react';

import { classNames } from '@/shared/lib';

import styles from './Dropdown.module.scss';

type TDropdownDirection = 'top left'| 'top right' | 'bottom left' | 'bottom right';

type TDropdownProps = {
    className?: string;
    items: ReactNode[];
    label: ReactNode;
    direction?: TDropdownDirection;
}

const mapDirectionClass: Record<TDropdownDirection, string> = {
    'top left': styles.topLeft,
    'top right': styles.topRight,
    'bottom left': styles.bottomLeft,
    'bottom right': styles.bottomRight
} 

export const Dropdown:FC<TDropdownProps> = ({className, items, label, direction = 'bottom right'}) => {
    
    return (
        <Menu as='div' className={classNames(styles.Dropdown, {}, [className])}>
            <Menu.Button className={styles.button}>{label}</Menu.Button>
            <Menu.Items as='ul' className={classNames(styles.items, {}, [mapDirectionClass[direction]])}>
                <>
                    {items.map((item, index)=>(
                        <Menu.Item key={index}>
                            {({ active }) => (
                                <li 
                                    className={classNames(styles.item, {[styles.active]: active} )}>
                                    {item}
                                </li>
                            )}
                        </Menu.Item>
                    ))}
                </>
            </Menu.Items>
        </Menu>
    )
}