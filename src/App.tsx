import { useState } from 'react';
import HelloWorld from '@/component/HelloWord';
import Logon from '@/assets/react.svg';
import '@/App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <HelloWorld />
      <h1>Vite + React</h1>
      <img src={Logon} alt="" />
      <div className="card">
        <button type="submit" onClick={() => setCount((count) => count + 1)}>
          count is
          {' '}
          {count}
        </button>
        <p>
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
