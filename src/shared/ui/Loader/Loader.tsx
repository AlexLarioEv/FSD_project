import { FC } from "react";

import { classNames } from "shared/lib";

import styles from './Loader.module.scss';

type TLoaderProps = {
  className?: string;
};

export const Loader: FC<TLoaderProps> = ({ className }) => {
    return (
        <span className={classNames(styles.Loader, {}, [className])}></span>
    );
};