import React from 'react';
import PropTypes from 'prop-types';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    updateState: PropTypes.func,
    deleteFish: PropTypes.func,
    deleteOrder: PropTypes.func,
    addFish: PropTypes.func,
    loadSampleFishes: PropTypes.func,
  };
  render() {
    return (
      <div className='inventory'>
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map((key) => (
          <EditFishForm
            key={key}
            index={key}
            fish={this.props.fishes[key]}
            updateState={this.props.updateState}
            deleteFish={this.props.deleteFish}
            deleteOrder={this.props.deleteOrder}
          ></EditFishForm>
        ))}
        <AddFishForm addFish={this.props.addFish}></AddFishForm>
        <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
      </div>
    );
  }
}

export default Inventory;
