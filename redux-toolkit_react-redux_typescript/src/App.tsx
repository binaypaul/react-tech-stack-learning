import { useState } from 'react'
import { useAppDispatch, useAppSelector } from "./app/hooks";
import logo from './logo.svg'
import './App.css'
import { incremented, decremented, updatedAmount } from './features/counter/counter-slice';
import { useFetchBreedsQuery } from './features/dogs/dogs-api-slice'

function App() {
  // const [count, setCount] = useState(0)
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(incremented());
  }

  const handleDecrement = () => {
    dispatch(decremented());
  }

  const handleUpdateAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updatedAmount(e.target.value === '' ? 0 : Number.parseInt(e.target.value)));
  }

  const { data = [], isFetching } = useFetchBreedsQuery();



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <div>
            <input type='text' value={count} onChange={(e) => handleUpdateAmount(e)} />
            <br /> <br />
            <button type="button" onClick={handleIncrement}>+</button>
            <p>{count}</p>
            <button type="button" onClick={handleDecrement}>-</button>
          </div>
          <div>
            <p>Number of dogs fetched: {data.length}</p>
            {isFetching && <p>Loading...</p>}
            {!isFetching &&
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Picture</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((breed) => (
                    <tr key={breed.id}>
                      <td>{breed.name}</td>
                      <td>
                        <img src={breed.image.url} height={250} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            }
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
