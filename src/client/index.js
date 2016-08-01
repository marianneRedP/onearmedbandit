import React from 'react'
import ReactDom from 'react-dom'
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './container/app';
import reducer from './reducer';

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, createLogger()),
);

console.log('STATE = ', store.getState());

ReactDom.render(
    <Provider store={ store }>
      <App />
    </Provider>,
    document.getElementById('bandit'),
    );
