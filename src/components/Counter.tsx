import { FC,useState } from 'react';

import styles from './Counter.module.scss';

export const Counter:FC = () => {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <div className={styles.title}>{count}</div> 
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}