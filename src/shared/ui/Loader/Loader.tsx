import { FC } from "react";

import { classNames } from "@/shared/lib";

import styles from './Loader.module.scss';

type TLoaderProps = {
  className?: string;
  testId?: string;
};

export const Loader: FC<TLoaderProps> = ({ className, testId }) => {
    return (
        <span data-testid={testId} className={classNames(styles.Loader, {}, [className])}></span>
    );
};