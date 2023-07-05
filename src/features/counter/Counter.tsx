import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment, 
  decrement,
  reset,
  incrementByAmount
} from './counterSlice';
import {useState} from 'react';

const Counter = () => {

  const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState("0");

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount("0");
    dispatch(reset());
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <div className="bg-gray-200 p-4 mb-4">
      <p className="text-4xl">{count}</p>
    </div>
    <div className="flex gap-4">
      <button
        onClick={() => dispatch(increment())}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        +
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        -
      </button>
    </div>
    <div className="flex gap-4 mt-4">
    <div className="border border-gray-400 flex-1">
      <input  
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
        className="bg-gray-200 p-4"
      />

    </div>
  </div>
  <div className="flex gap-4 mt-4">
      <button
        onClick={() => dispatch(incrementByAmount(addValue))}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Amount
      </button>
      <button
        onClick={resetAll}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Reset
      </button>
    </div>
  </div>
  )
}

export default Counter