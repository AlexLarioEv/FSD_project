import { useState } from 'react';

import './styles.css'

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className='title'>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}
