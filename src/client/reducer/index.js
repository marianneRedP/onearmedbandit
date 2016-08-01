import { GET_FRUITS } from '../actions';
import { combineReducers } from 'redux';

const fruits = (state = [], action) => {
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

