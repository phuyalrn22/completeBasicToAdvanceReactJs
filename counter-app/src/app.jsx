import { useState } from "react";
const App = () => {
  const [value, setValue] = useState(0);
  //   let value = 0;
  const onIncrease = (e) => {
    if (value >= 20) {
      return alert("Value cannot be greater than 20");
    }
    setValue(value + 1);
  };
  const onDecrease = (e) => {
    if (value <= 0) {
      return alert("Value cannot be greater than 20");
    }
    setValue(value - 1);
  };
  const [val, setVal] = useState(value);
  const saveValue = (e) => {
    const res = document.getElementById('res');
    if(res.innerHTML === ''){
    }
    res.innerHTML += ', ' + value;
  };
  return (
    <div className="app">
      <div>
        Counter: <span>{value}</span>
      </div>
      <div className="action">
        <button onClick={onIncrease}>Increase People</button>
        <button onClick={onDecrease}>Decrease People</button>
        <button onClick={saveValue}>Save People</button>
      </div>
      <div className="result">
        Saved Value is = <span id = 'res'></span>
      </div>
    </div>
  );
};
export default App;
