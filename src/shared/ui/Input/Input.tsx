import {
    InputHTMLAttributes,
    useState,
    useRef,
    HTMLInputTypeAttribute,
    SyntheticEvent,
    ChangeEvent,
    memo,
} from 'react';

import { classNames } from '@/shared/lib';

import styles from './Input.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';

type TInputAttributes = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'value'
>;

export type TInputProps = {
    className?: string;
    value?: string | number;
    type?: HTMLInputTypeAttribute;
    onChange?: (e: string) => void;
    placeholder?: string;
    inputPlaceholder?: string;
    testId?: string;
    autofocus?: boolean;
    disabled?: boolean;
} & TInputAttributes;

const Input = memo(
    ({
        className,
        onChange,
        value = '',
        type = 'text',
        placeholder,
        autofocus,
        testId,
        inputPlaceholder,
        ...otherProps
    }: TInputProps) => {
        const [isFocus, setIsFocus] = useState(autofocus);
        const [caretPosition, setCaretPosition] = useState(0);
        const ref = useRef<HTMLInputElement>(null);

        const onFocus = () => {
            setIsFocus(true);
            ref.current?.focus();
        };

        const onBlur = () => {
            setIsFocus(false);
        };

        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value);
            setCaretPosition(e.target.value.length);
        };

        const onSelect = (e: SyntheticEvent<HTMLInputElement, Event>) => {
            const target = e.target as HTMLInputElement;
            setCaretPosition(target.selectionStart || 0);
        };

        return (
            <ToggleFeatures
                feature="enableAppRedesigned"
                on={
                    <div className={classNames(styles.wrapperInputRedesigned)}>
                        {placeholder && <span>{`${placeholder}:`}</span>}

                        <div className={styles.wrapperCaret}>
                            <input
                                {...otherProps}
                                data-testid={testId}
                                ref={ref}
                                onBlur={onBlur}
                                onFocus={onFocus}
                                className={classNames(
                                    styles.InputRedesigned,
                                    {},
                                    [className],
                                )}
                                onChange={onChangeHandler}
                                onSelect={onSelect}
                                value={value}
                                type={type}
                                placeholder={inputPlaceholder}
                            />
                        </div>
                    </div>
                }
                off={
                    <div className={classNames(styles.wrapperInput)}>
                        {placeholder && <span>{`${placeholder}>`}</span>}

                        <div className={styles.wrapperCaret}>
                            <input
                                {...otherProps}
                                data-testid={testId}
                                ref={ref}
                                onBlur={onBlur}
                                onFocus={onFocus}
                                className={classNames(styles.Input, {}, [
                                    className,
                                ])}
                                onChange={onChangeHandler}
                                onSelect={onSelect}
                                value={value}
                                type={type}
                            />
                            {isFocus && (
                                <span
                                    data-testid="caret"
                                    style={{ left: `${caretPosition * 9}px` }}
                                    className={styles.caret}
                                ></span>
                            )}
                        </div>
                    </div>
                }
            />
        );
    },
);

Input.displayName = 'Input';

export { Input };
