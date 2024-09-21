import { FC } from 'react';

import styles from './Counter.module.scss';

type TProps ={
    count: number
}

export const Counter:FC<TProps> = ({count}) => {
  return (
    <>
      <div className={styles.title}>{count}</div> 
    </>
  );
}