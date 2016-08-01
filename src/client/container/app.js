import React from 'react';
import { connect } from 'react-redux';
import Fruits from '../components/fruits';
import Title from '../components/title';
import { loadFruits } from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);
  };

  onLoadFruits = () => {
    this.props.dispatch(loadFruits());
  };

  render() {
    console.log('APP');
    return (
      <div className='App'>
        <Title />
        <Fruits
          fruits={ this.props.fruits }
          onLoadFruits={ this.onLoadFruits } />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  fruits: React.PropTypes.object.isRequired,
};

export default connect(state => ({ fruits: state.fruits }))(App);
