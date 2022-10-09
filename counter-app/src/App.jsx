import { useState } from "react";
const App = () => {
  const [value, setValue] = useState(0);
  const [savedValue, setSavedValue] = useState("");

  const onIncrease = (e) => {
    if (value >= 20) {
      alert("must be less than 20");
      return;
    }
    setValue(value + 1);
    //   value = value +1;
  };
  const onDecrease = (e) => {
    if (value > 0) {
      setValue(value - 1);
    } else {
      alert("must not be less than 0");
    }
  };
  const onSave = (e) => {
    if (savedValue.length === 0) {
      setSavedValue(value.toString());
    } else if (savedValue[savedValue.length - 1] == value) {
      return;
    } else {
      setSavedValue(savedValue + "," + value.toString());
    }
  };

  return (
    <div className="app">
      <div>
        Counter : <span>{value}</span>
      </div>
      <div>
        Saved Value : <span>{savedValue}</span>
      </div>
      <hr />
      <div className="actions">
        <button onClick={onIncrease}>Increase people</button>
        <button onClick={onDecrease}>Decrease people</button>
        <button onClick={onSave}>Save people</button>
      </div>
    </div>
  );
};

export default App;
