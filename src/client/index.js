import React from 'react'
import ReactDom from 'react-dom'
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './container/app';
import reducer from './reducer';
import { loadFruits } from './actions';

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, createLogger()),
);

store.dispatch(loadFruits());

ReactDom.render(
    <Provider store={ store }>
      <App />
    </Provider>,
    document.getElementById('bandit'),
    );
