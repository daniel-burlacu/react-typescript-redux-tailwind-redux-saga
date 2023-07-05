import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './app/store';
//import { createAction, createReducer, AnyAction, PayloadAction, configureStore } from '@reduxjs/toolkit';

 const rootElement = document.getElementById('root');

// interface CounterState {
//   value: number;
// }

// const initialState: CounterState = {
//   value: 0,
// };

// ACTION -> DESCRIBES WHAT YOU WANT TO DO
// ---> INCREMENT
// ---> DECREMENT
// const increment = createAction<number>('increment');
// const decrement = createAction<number>('decrement');

// function isActionWithNumberPayload(action: AnyAction): action is PayloadAction<number> {
//   return typeof action.payload === 'number';
// }

// REDUCER -> DESCRIBES HOW YOUR ACTIONS TRANSFORM THE STATE INTO THE NEXT STATE

// const reducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(increment, (state, action) => {
//       // action is inferred correctly here
//       state.value += action.payload;
//     })
//     // You can chain calls, or have separate `builder.addCase()` lines each time
//     .addCase(decrement, (state, action) => {
//       state.value -= action.payload;
//     })
//     // You can apply a "matcher function" to incoming actions
//     .addMatcher(isActionWithNumberPayload, (state, action) => {})
//     // and provide a default case if no other handlers matched
//     .addDefaultCase((state, action) => {});
// });

// STORE -> GLOBALIZED STATE



// DISPATCH -> EXECUTES THE ACTION

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    
      <App />
   
  </Provider>,
  </React.StrictMode>,
  rootElement
);
