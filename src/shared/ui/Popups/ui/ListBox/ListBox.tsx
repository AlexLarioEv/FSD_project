import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib';

import { HStack } from '../../../Stack';
import { Button, EButtonTheme } from '../../../Button/Button';
import {mapDirectionClass, TPopupDirection} from '../../styles/const';

import styles from './ListBox.module.scss';
import popupStyles from '../../styles/popup.module.scss';

export type TListBoxItem<T> = {
    value: T; 
    content: ReactNode;
    disabled?: boolean;
}

type TListBoxProps<T> = {
    testId?: string;
    items?: TListBoxItem<T>[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: T) => void;
    readonly?: boolean;
    direction?: TPopupDirection;
    label?: string;
}

export function ListBox<T extends string>(props: TListBoxProps<T>) {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom right',
        label,
        testId
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack align='center' gap={4}>
            {label && <span>{`${label}>`}</span>}
            <HListBox
                disabled={readonly}
                as="div"
                className={classNames(styles.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button data-testId={testId} className={popupStyles.trigger}>
                    <Button theme={EButtonTheme.BORDER} disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options as='div' className={classNames(styles.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        popupStyles.item,
                                        {
                                            [popupStyles.active]: active,
                                            [popupStyles.disabled]: item.disabled,
                                        },
                                    )}
                                >
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
}
