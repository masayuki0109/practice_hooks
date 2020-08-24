import React, { useState, useCallback } from 'react';
import './App.css';
import Button from './Button';

function App() {
  // App自体を再レンダリングするためにAppに直書き
  const [count, setCount] = useState(0);
  const onClickCallback = useCallback(() => console.log('clicked'), [])

  return (
    <div className="App">
      <h1>{count}</h1>
      <Button onClick={onClickCallback}>キャッシュされたボタン</Button>
      <Button onClick={() => console.log('clicked')}>キャッシュされてないボタン</Button>
      {/* Appを再レンダリングするために、countをインクリメントするためのボタン */}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count up
      </button>
    </div>
  );
}

export default App;
