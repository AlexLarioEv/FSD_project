import { ButtonHTMLAttributes, FC } from "react";

import { classNames } from "shared/lib";

import styles from './Button.module.scss';

type TButtonProps = {
  className?: string;
  type?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

enum EButtonType  {
  CLEAR = 'clear'
}

export const Button: FC<TButtonProps> = ({ className, children,type = EButtonType.CLEAR, ...otherProps }) => {
    
  return (
    <button className={classNames(styles.Button, {}, [className, styles[type]])} {...otherProps}>
        {children}
    </button>
  );
};