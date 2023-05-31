import logo from "./logo.svg";
import "./App.css";
import Count from "./Count";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const subtract = () => {
    count >= 1 && setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="App">
      <Header />
      <div className="counter-div">
        <div className="counter">
          <button onClick={subtract}>- Subtract</button>
          <Count count={count} />
          <button onClick={add}>+ Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
