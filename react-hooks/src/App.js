import { useState } from 'react';
import './App.css';
import UseState from './hooks/UseState';
import UseEffect from './hooks/UseEffect';

export default function App() {
  const radiobuttons = [
    {
      hookLabel: 'useState()',
      hookValue: 'usestate'
    },
    {
      hookLabel: 'useEffect()',
      hookValue: 'useeffect'
    },
    {
      hookLabel: 'useReducer()',
      hookValue: 'usereducer'
    },
  ];

  const [radioSelected, setRadioSelected] = useState(radiobuttons[0].hookValue);

  const renderHook = (key) => {
    switch (key) {
      case radiobuttons[0].hookValue:
        return <UseState />
      
      case radiobuttons[1].hookValue:
        return <UseEffect />
    
      default:
        return <UseState />
    }
  }

  return (
    <div className="App">
      <h3>React Hooks</h3>
      <>
        {radiobuttons?.map((radiobutton, i) => (
          <span key= {i} >
          <input 
            type='radio' 
            checked = {radioSelected === radiobutton.hookValue}
            name= {radiobutton.hookLabel} 
            value= {radiobutton.hookValue}
            onChange= {(e)=>setRadioSelected(e.target.value)}
          /> {radiobutton.hookLabel}
          </span>
        ))}
      </>

      {renderHook(radioSelected)}
    </div>
  );
}