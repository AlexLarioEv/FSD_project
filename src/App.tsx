import { useState } from 'react';

import {Counter} from './components/Counter'

import './index.scss';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Counter count={count}/>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}
