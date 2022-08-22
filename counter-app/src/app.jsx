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
  const [val, setVal] = useState('');
  const saveValue = (e) => {
    if(setVal.length === 0){
      setVal(value.toString());
    }else if(val[val.length-1]==value){
      alert("saved value cannot be same as previous")
    }else{
    setVal(val+", "+ value.toString());
    }
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
        Saved Value is = <span>{val}</span>
      </div>
    </div>
  );
};
export default App;
