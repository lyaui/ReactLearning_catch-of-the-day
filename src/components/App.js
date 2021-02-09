import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import base from '../base';

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };
  // DOM已經掛載完成 ，在這個階段可以呼叫api來更新DOM ，適合做一些初始化的工作
  componentDidMount() {
    const { params } = this.props.match;
    // 訂單
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) this.setState({ order: JSON.parse(localStorageRef) });
    // firebase menu
    // refs in Firebase are sort of the reference to a piece of data in the database
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes',
    });
  }

  // 感覺有點像 watch
  componentDidUpdate() {
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
  }

  // 當一個 component 被從 DOM 中移除時，這個方法將會被呼叫
  componentWillUnmount() {
    // 修正 memory leak 的問題
    base.removeBinding(this.ref);
  }

  addFish = (fish) => {
    // 1. Take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // 2. Add our new fish to that fishes variale
    fishes[`fish${Date.now()}`] = fish;
    // 3. set the new fishes object to state
    this.setState({ fishes });
  };
  addToOrder = (key) => {
    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. either add to the order, or update the number in our order order
    order[key] = order[key] + 1 || 1;
    // 3. call setState to update our state object
    this.setState({ order });
  };
  updateState = (key, updatedFish) => {
    // 1. take a copy of state
    // 2. update the state
    const fishes = { ...this.state.fishes, [key]: updatedFish };
    // 3. set that to state
    this.setState({ fishes });
  };

  deleteFish = (key) => {
    // 1. take a copy of state
    const fishes = { ...this.state.fishes };
    // 2. update the state
    fishes[key] = null;
    this.setState({ fishes });
  };

  deleteOrder = (key) => {
    const order = { ...this.state.order };
    delete order[key];
    this.setState({ order });
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
              <Fish
                key={item}
                index={item}
                details={this.state.fishes[item]}
                addToOrder={this.addToOrder}
              ></Fish>
            ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          deleteOrder={this.deleteOrder}
        ></Order>
        <Inventory
          addFish={this.addFish}
          updateState={this.updateState}
          deleteOrder={this.deleteOrder}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
        ></Inventory>
      </div>
    );
  }
}

export default App;
