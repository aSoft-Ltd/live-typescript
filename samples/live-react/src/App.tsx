import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Live, useLive } from "@asoft-ltd/live-react"

const live = new Live(1)

interface CounterProps {
  onToggle: () => void
}

function Counter(props: CounterProps) {
  const value = useLive(live)
  const { onToggle } = props
  return (
    <div className="App">
      Live Value: {value}
      <button onClick={() => onToggle()}>Toggle</button>
    </div>
  );
}

function App() {
  const [mount, setMount] = useState(true)
  if (mount) {
    return <Counter onToggle={() => setMount(!mount)} />;
  } else {
    return (
      <div className="App">
        Unmounted
        <button onClick={() => setMount(!mount)}>Toggle</button>
      </div>
    );
  }
}

setInterval(() => {
  live.value++
}, 1000)

export default App;
