import React, { useMemo } from "react";
import "./App.css";

const x = 1;

const App: React.FC = () => {
  const liveId = useMemo(() => {
    if (x === 1 && liveId) {
      return x;
    }
    return 2;
  }, []);
  return <div className="App">{liveId}</div>;
};

export default App;
