import {useState} from 'react';

const App = () =>{
  const [value,setValue] = useState(0);
  const [saveValues,setSaveValues] = useState("");

  const increaseValue = ()=>{
    if(value>=20){
      alert("Bus is Full!!");

    }else{
      setValue(value+1);
    }
  }
  const decreaseValue = ()=>{
    if(value<=0){
      alert("Bus is Empty");
    }else{
      setValue(value-1);
    }
  }
  const saveValue = ()=>{
    if(saveValues.length===0){
      setSaveValues(value.toString());
    }
    else if(saveValues[saveValues.length-1]==value){
      return;
    }else{
      setSaveValues(saveValues + "," + value.toString());
    }
  }

  return(
    <div className="container">
      <h1 className="top">People Count App: Bus</h1><hr/><br/><br/>
      <h2>Total Number of People: {value} </h2>
      <div className="button">
          <button onClick={increaseValue} className="btn">Increase People</button>
          <button onClick={decreaseValue} className="btn">Decrease People</button>
          <button onClick={saveValue} class="btn">Save People</button>
      </div>
      <h2>Available People: {saveValues} </h2>
    </div>
  )
  
}
export default App;