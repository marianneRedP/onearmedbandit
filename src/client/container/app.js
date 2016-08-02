import React from 'react';
import store from '../store';
import Title from '../components/title';
import Fruits from '../components/fruits';

class App extends React.Component {

  state = { fruits: { 0: { id: 0, color: 'black', icon: 'ambulance' }  } };

  componentWillMount() {
    store.rollFruits();
    store.on(fruits => this.setState({ fruits }));
    store.onEnd();
  };

  render() {
    return (
      <div className='App'>
        <Title />
        <Fruits fruits={ this.state.fruits }  />
      </div>
    )
  }
};

export default App;

