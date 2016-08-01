import GET_FRUITS from '../actions'

const initialState = {};

const reducer = (state = initialState, action) => {
  switch(action.type) {
  case GET_FRUITS:
    action.fruits;    
    default:
      return state;
  };
}

export default reducer;

