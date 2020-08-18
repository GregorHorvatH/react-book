export const code1 = `import { createStore, combineReducers } from 'redux';

// Action types
const INCREMENT = 'timer/increment';
const DECREMENT = 'timer/decrement';

// Action creators
function increment(value) {
  return {
    type: INCREMENT,
    payload: value,
  };
}

function decrement(value) {
  return {
    type: DECREMENT,
    payload: value,
  };
}

// Reducer
function timer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;

    case DECREMENT:
      return state - action.payload;

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  timer,
});

// Store
const store = createStore(rootReducer);`;

export const code2 = `npm install @reduxjs/toolkit`;

export const code3 = `// До
import { createStore } from 'redux';

const store = createStore(timer);

// После
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  timer,
});

const store = configureStore({
  reducer: rootReducer,
});`;

export const code4 = `import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    timer,
  },
});`;

export const code5 = `import { configureStore, combineReducers } from '@reduxjs/toolkit';

// Action types
const INCREMENT = 'timer/increment';
const DECREMENT = 'timer/decrement';

// Action creators
function increment(value) {
  return {
    type: INCREMENT,
    payload: value,
  };
}

function decrement(value) {
  return {
    type: DECREMENT,
    payload: value,
  };
}

// Reducer
function timer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
}

// Store
const store = configureStore({
  reducer: {
    timer,
  },
});`;

export const code6 = `// До
const INCREMENT = 'timer/increment';

function increment(value) {
  return {
    type: INCREMENT,
    payload: value,
  };
}
console.log(increment(5)); // {type: "timer/increment", payload: 5}

// После
import { createAction } from '@reduxjs/toolkit';

const increment = createAction('timer/increment');
console.log(increment(5)); // {type: "timer/increment", payload: 5}`;

export const code7 = `const increment = createAction('INCREMENT');

console.log(increment.toString()); // "timer/increment"
console.log(increment.type); // "timer/increment"`;

export const code8 = `import { configureStore, createAction } from '@reduxjs/toolkit';

// Action creators
const increment = createAction('timer/increment');
const decrement = createAction('timer/decrement');

// Reducer
function timer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;

    case DECREMENT:
      return state - action.payload;

    default:
      return state;
  }
}

// Store
const store = configureStore({
  reducer: {
    timer,
  },
});`;

export const code9 = `import { createReducer } from '@reduxjs/toolkit';

const increment = createAction('timer/increment');
const decrement = createAction('timer/decrement');

const timer = createReducer(0, {
  [increment.type]: (state, action) => state + action.payload,
  [decrement.type]: (state, action) => state - action.payload,
});`;

export const code10 = `const timer = createReducer(0, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
});`;

export const code11 = `import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

// Action creators
const increment = createAction('timer/increment');
const decrement = createAction('timer/decrement');

// Reducer
const timer = createReducer(0, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
});

// Store
const store = configureStore({
  reducer: {
    timer,
  },
});`;

export const code12 = `import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Timer from './Timer';
import store from './redux/store';
import './global.css';

render(
  <Provider store={store}>
    <Timer />
  </Provider>,
  document.getElementById('root'),
);`;
