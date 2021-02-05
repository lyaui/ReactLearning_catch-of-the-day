import React from 'react';

class StorePicker extends React.Component {
  render() {
    return (
      <React.Fragment>
        {' '}
        <form action='' className='store-selector'>
          <h2>Hello</h2>
          <input type='text' required placeholder='Store Name' />
          <button>Visit Store</button>
        </form>
      </React.Fragment>
    );
  }
}

export default StorePicker;
