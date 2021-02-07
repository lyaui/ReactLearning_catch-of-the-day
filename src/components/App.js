import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  // 可以用constructor法來建立
  // constructor() {
  //   super();
  //   this.state = {};
  // }
  state = {
    fishes: {},
    order: {},
  };

  addFish = (fish) => {
    // 1. Take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // 2. Add our new fish to that fishes variale
    fishes[`fish${Date.now()}`] = fish;
    // 3. set the new fishes object to state
    this.setState({ fishes });
  };
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };
  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market'></Header>
        </div>
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}></Inventory>
        <Order></Order>
      </div>
    );
  }
}

export default App;
