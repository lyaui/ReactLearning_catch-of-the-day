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
    const storeName = this.myInput.current.value;
    // 由 Router props 過來的資訊
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <React.Fragment>
        <form action='' className='store-selector' onSubmit={this.goToStore}>
          <h2>Hello</h2>
          <input
            type='text'
            ref={this.myInput}
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
