import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib';

import { HStack } from '../../../Stack';
import { Button, EButtonTheme } from '../../../Button/Button';
import {
    mapDirectionClass,
    mapDirectionBorderClass,
    TPopupDirection,
} from '../../styles/const';

import styles from './ListBox.module.scss';
import popupStyles from '../../styles/popup.module.scss';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';

export type TListBoxItem<T> = {
    value: T;
    content: ReactNode;
    disabled?: boolean;
};

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
};

const mapToBorderOptions: Record<TPopupDirection, string> = {
    ['bottom right']: styles.borderOptionsBottom,
    ['bottom left']: styles.borderOptionsBottom,
    ['top right']: styles.borderOptionsTop,
    ['top left']: styles.borderOptionsTop,
};

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
        testId,
    } = props;

    const classBorderOptions = toggleFeatures({
        name: 'enableAppRedesigned',
        on: () => mapToBorderOptions[direction],
        off: () => '',
    });

    const optionsClasses = [mapDirectionClass[direction], classBorderOptions];
    const borderClass = mapDirectionBorderClass[direction];

    return (
        <ToggleFeatures
            feature="enableAppRedesigned"
            on={
                <HStack align="center" gap={8}>
                    {label && <span>{`${label}:`}</span>}
                    <HListBox
                        disabled={readonly}
                        as="div"
                        className={classNames(styles.ListBox, {}, [className])}
                        value={value}
                        onChange={onChange}
                    >
                        {({ open }) => (
                            <>
                                <HListBox.Button
                                    data-testId={testId}
                                    className={popupStyles.trigger}
                                >
                                    <ToggleFeatures
                                        feature="enableAppRedesigned"
                                        on={
                                            <Button
                                                className={classNames(
                                                    popupStyles.buttonTrigger,
                                                    {
                                                        [borderClass]: open,
                                                    },
                                                    [],
                                                )}
                                                theme={EButtonTheme.CLEAR}
                                                disabled={readonly}
                                                padding
                                            >
                                                {value ?? defaultValue}
                                            </Button>
                                        }
                                        off={
                                            <Button
                                                theme={EButtonTheme.BORDER}
                                                disabled={readonly}
                                            >
                                                {value ?? defaultValue}
                                            </Button>
                                        }
                                    />
                                </HListBox.Button>
                                <HListBox.Options
                                    as="div"
                                    className={classNames(
                                        styles.optionsRedesigned,
                                        {},
                                        optionsClasses,
                                    )}
                                >
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
                                                        popupStyles.itemRedesigned,
                                                        {
                                                            [popupStyles.activeRedesigned]:
                                                                active,
                                                            [popupStyles.disabled]:
                                                                item.disabled,
                                                            [popupStyles.selected]:
                                                                selected,
                                                        },
                                                    )}
                                                >
                                                    {item.content}
                                                </li>
                                            )}
                                        </HListBox.Option>
                                    ))}
                                </HListBox.Options>
                            </>
                        )}
                    </HListBox>
                </HStack>
            }
            off={
                <HStack align="center" gap={4}>
                    {label && <span>{`${label}>`}</span>}
                    <HListBox
                        disabled={readonly}
                        as="div"
                        className={classNames(styles.ListBox, {}, [className])}
                        value={value}
                        onChange={onChange}
                    >
                        {({ open }) => (
                            <>
                                <HListBox.Button
                                    data-testId={testId}
                                    className={popupStyles.trigger}
                                >
                                    <ToggleFeatures
                                        feature="enableAppRedesigned"
                                        on={
                                            <Button
                                                className={classNames(
                                                    popupStyles.buttonTrigger,
                                                    {
                                                        [borderClass]: open,
                                                    },
                                                    [],
                                                )}
                                                theme={EButtonTheme.CLEAR}
                                                disabled={readonly}
                                                padding
                                            >
                                                {value ?? defaultValue}
                                            </Button>
                                        }
                                        off={
                                            <Button
                                                theme={EButtonTheme.BORDER}
                                                disabled={readonly}
                                            >
                                                {value ?? defaultValue}
                                            </Button>
                                        }
                                    />
                                </HListBox.Button>
                                <HListBox.Options
                                    as="div"
                                    className={classNames(
                                        styles.options,
                                        {},
                                        optionsClasses,
                                    )}
                                >
                                    {items?.map((item) => (
                                        <HListBox.Option
                                            key={item.value}
                                            value={item.value}
                                            disabled={item.disabled}
                                            as={Fragment}
                                        >
                                            {({ active }) => (
                                                <li
                                                    className={classNames(
                                                        popupStyles.item,
                                                        {
                                                            [popupStyles.active]:
                                                                active,
                                                            [popupStyles.disabled]:
                                                                item.disabled,
                                                        },
                                                    )}
                                                >
                                                    {item.content}
                                                </li>
                                            )}
                                        </HListBox.Option>
                                    ))}
                                </HListBox.Options>
                            </>
                        )}
                    </HListBox>
                </HStack>
            }
        />
    );
}
