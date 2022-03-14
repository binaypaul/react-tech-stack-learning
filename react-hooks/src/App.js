import { useState } from 'react';
import './App.css';
import UseState from './hooks/UseState';
import UseEffect from './hooks/UseEffect';
import UseContext from './hooks/UseContext';

const App = () => {
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
      hookLabel: 'useContext()',
      hookValue: 'usecontext'
    }
  ];

  const [radioSelected, setRadioSelected] = useState(radiobuttons[0].hookValue);

  const renderHook = (radioSelected) => {
    switch (radioSelected) {
      case radiobuttons[0].hookValue:
        return <UseState />
      
      case radiobuttons[1].hookValue:
        return <UseEffect />
      
        case radiobuttons[2].hookValue:
          return <UseContext />
    
      default:
        return <UseState />
    }
  }

  return (
    <div className="App">
      <p className="m-5 text-center text-3xl text-blue-800">
        React Hooks
      </p>
      <div className="p-3 max-w-fit mx-auto bg-blue-300 rounded-xl shadow-lg flex items-center space-x-5">
        {radiobuttons?.map((radiobutton, i) => (
          <span key= {i} >
            <input
              type='radio' 
              checked = {radioSelected === radiobutton.hookValue}
              name= {radiobutton.hookLabel} 
              value= {radiobutton.hookValue}
              onChange= {(e)=>setRadioSelected(e.target.value)}
            />
            <span className="text-black font-bold">{radiobutton.hookLabel}</span>
          </span>
        ))}
      </div>
      <div className="p-5"></div>
      <div className="p-6 max-w-4xl mx-auto bg-blue-300 rounded-xl shadow-lg space-x-5">
        {renderHook(radioSelected)}
      </div>
    </div>
  );
}

export default App;