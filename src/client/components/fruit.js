import React from 'react';

class Fruit extends React.Component { 

  render() {
    const style = { color: this.props.color };
    const img = `fa fa-${this.props.icon} fa-5x`;
    return (
      <div className='fruit'>
        <span className={ img } style={ style }/>
      </div>
    );
  };
};

export default Fruit;
