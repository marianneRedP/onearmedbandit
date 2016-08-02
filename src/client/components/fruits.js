import React from 'react';
import _ from 'lodash';
import Fruit from './fruit';

const Fruits = ({ fruits }) => {
  const data = _.map(fruits, (fruit, id) => (
    <Fruit
      color={ fruit.color }
      icon={ fruit.icon }
      key={ id }
    />)
  );

  return (
    <div className='Fruits'>
      { data }
    </div>
  );
};

Fruits.propTypes = {
  fruits: React.PropTypes.object.isRequired,
};

export default Fruits;
