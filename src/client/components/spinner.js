import React from 'react';

class Spinner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
      <span class="sr-only">Loading...</span>
    );
  }
}

export default Spinner;
