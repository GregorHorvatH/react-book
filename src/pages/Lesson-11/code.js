export const code1 = `const state = {
  notes: [],
  filter: '',
  session: {
    user: {
      name: null,
      avatar: null,
    },
    token: null,
  },
};`;

export const code2 = `createStore(reducer, [preloadedState], [enhancer])`;

export const code3 = `import { createStore } from 'redux';

// Используем редюсер-болванку
const reducer = (state = {}, action) => state;

const store = createStore(reducer);`;

export const code4 = `const action = {
  type: 'ADD_NOTE',
  payload: {
    text: 'Redux is awesome!',
  },
};`;

export const code5 = `const addNote = text => ({
  type: 'ADD_NOTE',
  payload: {
    id: Date.now(),
    text,
  },
});

const deleteNote = id => ({
  type: 'DELETE_NOTE',
  payload: {
    id,
  },
});`;

export const code6 = `(previousState, action) => newState`;

export const code7 = `const initialState = [];

function notesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, action.payload];

    case 'DELETE_NOTE':
      return state.filter(note => note.id !== action.payload.id);

    default:
      return state;
  }
}`;

export const code8 = `npm install react-redux`;

export const code9 = `import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Болванка под reducer
const reducer = (state = {}, action) => state;

const store = createStore(reducer);

<Provider store={store}>
  <App />
</Provider>;`;

export const code10 = `connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(Component)`;

export const code11 = `const mapStateToProps = (state, props) => ({
  notes: state.notes,
  currentFilter: state.filter,
});`;

export const code12 = `const addNote = text => ({
  type: 'ADD_NOTE',
  payload: { text },
});

const mapDispatchToProps = dispatch => ({
  addNote: text => dispatch(addNote(text)),
});`;

export const code13 = `const addNote = text => ({
  type: 'ADD_NOTE',
  payload: { text },
});

const mapDispatchToProps = { addNote };`;

export const code14 = `import { combineReducers } from 'redux';
import notesReducer from './notes';
import filterReducer from './filter';

const rootReducer = combineReducers({
  notes: notesReducer,
  filter: filterReducer,
});

export default rootReducer;`;
