import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  myInput = React.createRef();
  goToStore = (e) => {
    e.preventDefault();
    console.log(this);
  };
  render() {
    return (
      <React.Fragment>
        <form action='' className='store-selector' onSubmit={this.goToStore}>
          <h2>Hello</h2>
          <input
            ref={this.myInput}
            type='text'
            required
            placeholder='Store Name'
            defaultValue={getFunName()}
          />
          <button>Visit Store</button>
        </form>
      </React.Fragment>
    );
  }
}

export default StorePicker;
