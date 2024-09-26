import { ButtonHTMLAttributes, FC } from "react";

import { classNames } from "shared/lib";

import styles from './Button.module.scss';

export enum EButtonType  {
  CLEAR = 'clear',
  BORDER = 'border'
}

export type TButtonProps = {
  className?: string;
  theme?: EButtonType;
  testId?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;


export const Button: FC<TButtonProps> = (
  { className, children,theme = EButtonType.CLEAR, testId, ...otherProps }) => {
    
  return (
    <button data-testid={testId} 
      className={classNames(styles.Button, {}, [className, styles[theme]])} {...otherProps}>
      {children}
    </button>
  );
};