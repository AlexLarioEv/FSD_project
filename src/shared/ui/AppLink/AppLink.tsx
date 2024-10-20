import { memo } from "react";

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


const AppLink = memo(({ 
    className, 
    children, 
    type=EApplinkTypes.PRIMARY, 
    ...otherProps}: TAppLinkProps) => {

    return (
        <Link className={classNames(styles.AppLink, {}, [className, styles[type]])} {...otherProps} >
            {children}
        </Link>
    );
});


AppLink.displayName = 'AppLink';

export {AppLink};