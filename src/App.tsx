import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Three from './pages/Three';
import Rxjs from './pages/Rxjs';
import reactLogo from './assets/react.svg';
import './App.less';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((i) => i + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

const AppRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="three" element={<Three />} />
        <Route path="rxjs" element={<Rxjs />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
