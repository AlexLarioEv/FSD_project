import { FC } from "react";

import { Loader } from 'shared/ui'
import { classNames } from "shared/lib";
import styles from './PageLoader.module.scss';

type TPageLoaderProps = {
  className?: string;
};

export const PageLoader: FC<TPageLoaderProps> = ({ className }) => {
  return (
    <div className={classNames(styles.PageLoader, {}, [className])}>
      <Loader/>
    </div>
  );
};