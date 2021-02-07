import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
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
          <ul className='fishes'>
            {Object.keys(this.state.fishes).map((item) => (
              <Fish key={item} details={this.state.fishes[item]}></Fish>
            ))}
          </ul>
        </div>
        <Order></Order>
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}></Inventory>
      </div>
    );
  }
}

export default App;
