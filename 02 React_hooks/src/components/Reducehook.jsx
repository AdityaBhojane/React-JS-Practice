import React, { useReducer } from 'react';


const ReduceHook = () => {

    // Reducer function
    const reducer = (state, action) => {
      switch (action.type) {
        case 'INCREMENT':
          return { count: state.count + 1 };
        case 'DECREMENT':
          return { count: state.count - 1 };
        default:
          return state;
      }
    };

  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // Event handlers
  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div className='flex items-center gap-10 m-5'>
      <div>
        Count (using reducer) : {state.count}
      </div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default ReduceHook;




