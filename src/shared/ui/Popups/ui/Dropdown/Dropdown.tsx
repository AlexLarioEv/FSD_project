import { FC, ReactNode } from 'react';
import { Menu } from '@headlessui/react';

import { classNames } from '@/shared/lib';

import {mapDirectionClass, TPopupDirection} from '../../styles/const';
import popupStyles from '../../styles/popup.module.scss';

import styles from './Dropdown.module.scss';

type TDropdownProps = {
    className?: string;
    items: ReactNode[];
    label: ReactNode;
    direction?: TPopupDirection;
}

export const Dropdown:FC<TDropdownProps> = ({className, items, label, direction = 'bottom right'}) => {
    
    return (
        <Menu as='div' className={classNames(styles.Dropdown, {}, [className])}>
            <Menu.Button className={popupStyles.trigger}>{label}</Menu.Button>
            <Menu.Items as='ul' className={classNames(styles.items, {}, [mapDirectionClass[direction]])}>
                <>
                    {items.map((item, index)=>(
                        <Menu.Item key={index}>
                            {({ active }) => (
                                <li 
                                    className={classNames(popupStyles.item, {[popupStyles.active]: active} )}>
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