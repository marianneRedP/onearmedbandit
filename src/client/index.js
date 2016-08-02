import React from 'react'
import ReactDom from 'react-dom'
import App from './container/app';
import reducer from './reducer';
import { loadFruits } from './actions';

ReactDom.render( <App />, document.getElementById('bandit'));
