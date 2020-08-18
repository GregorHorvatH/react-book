export const code1 = `const middleware = store => next => action => {};`;

export const code2 = `import { createStore, applyMiddleware } from 'redux';

const reducer = state => state;

const loggerMiddleware = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  console.groupEnd(action.type);

  return next(action);
};

const enhancer = applyMiddleware(loggerMiddleware);

const store = createStore(reducer, enhancer);`;

export const code3 = `const asyncActionCreator = args => dispatch => {};`;

export const code4 = `const asyncActionCreator = args => dispatch => {
  fetch('some url')
    .then(r => r.json())
    .then(data => {
      dispatch({
        type: 'FETCH_SUCCESS',
        payload: data,
      });
    });
};`;

export const code5 = `const thunk = ({ dispatch, getState }) => next => action =>
typeof action === 'function' ? action(dispatch, getState) : next(action);`;

export const code6 = `{
  notes: {
    items: [],
    loading: false,
    error: null
  }
}`;

export const code7 = `const fetchStart = () => ({
  type: 'notes/FETCH_START',
});

const fetchSuccess = data => ({
  type: 'notes/FETCH_SUCCESS',
  payload: data,
});

const fetchFailure = error => ({
  type: 'notes/FETCH_FAILURE',
  payload: error,
});

const asyncActionCreator = args => dispatch => {
  dispatch(fetchStart());

  fetch('some url')
    .then(r => r.json())
    .then(data => dispatch(fetchSuccess(data)))
    .catch(err => dispatch(fetchFailure(err)));
};`;
