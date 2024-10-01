import { FC } from "react";

import { classNames } from "@/shared/lib";

import styles from './AppLink.module.scss';
import { Link, LinkProps } from "react-router-dom";

export enum EApplinkTypes  {
    PRIMARY = 'primary',
    SECONDARY= 'secondary',
}

type TAppLinkProps = LinkProps & {
  className?: string;
  type?: EApplinkTypes;
};


export const AppLink: FC<TAppLinkProps> = ({ 
    className, 
    children, 
    type=EApplinkTypes.PRIMARY, 
    ...otherProps}) => {

    return (
        <Link  className={classNames(styles.AppLink, {}, [className, styles[type]])} {...otherProps} >
            {children}
        </Link>
    );
};
