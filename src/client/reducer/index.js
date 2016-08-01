import { GET_FRUITS } from '../actions';
import { combineReducers } from 'redux';

const initialState = {
    0: { id: 0, color: 'darkblue', icon: 'spinner' },
    1: { id: 1, color: 'darkblue', icon: 'spinner' },
    2: { id: 2, color: 'darkblue', icon: 'spinner' },
    3: { id: 3, color: 'darkblue', icon: 'spinner' },
    4: { id: 4, color: 'darkblue', icon: 'spinner' },
};

const fruits = (state = initialState, action) => {
  switch(action.type) {
  case GET_FRUITS:
    return {
      ...state,
      [action.id]: {
          ...state[action.id],
          color: action.color,
          icon: action.icon,
          id: action.id,
        }
      };
    default:
      return state;
  };
}

const reducer = combineReducers({
  fruits
});

export default reducer;

