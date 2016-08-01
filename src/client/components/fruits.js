import React from 'react';
import _ from 'lodash';
import Fruit from './fruit';

const Fruits = ({ fruits, onLoadFruits }) => {
  console.log('----------', fruits);
  const data = _.map(fruits, (fruit, id) => (
    <Fruit
      color={ fruit.color }
      icon={ fruit.icon }
      key={ id }
    />)
  );

  const handleFruit = () => {
    onLoadFruits();
  }

  return (
    <div className='Fruits'>
      <form onSubmit={ handleFruit() } >
        <input type='text' />
      </form>
      { data }
    </div>
  );
};

Fruits.propTypes = {
  fruits: React.PropTypes.object.isRequired,
  onLoadFruits: React.PropTypes.func.isRequired,
};

export default Fruits;
