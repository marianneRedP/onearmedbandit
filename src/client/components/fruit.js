import React from 'react';

const Fruit = ({ color, icon }) => { 
  console.log('--color = ', color);
  console.log('--icon = ', icon);

  const img = `fa fa-${icon} fa-5x ${icon == 'spinner' ? 'fa-spin' : ''}`;
  const style = { color };

  return (
    <div className='fruit'>
      <span className={ img } style={ style }/>
    </div>
  );
};

Fruit.propTypes = {
  color: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
};

export default Fruit;
