import React from 'react';
import { connect } from 'react-redux';
import Fruit from '../components/fruit';
import { loadFruits } from '../actions';

class App extends React.Component {

  render() {
    return (
      <div className='App'>
      <Fruit />
     
      </div>
    );
  }
};

export default connect()(App);
