import React from 'react';

class EditFishForm extends React.Component {
  handleChange = (e) => {
    // update that fish
    // if there are duplicate keys the order of the spread opperator does matter.
    const updatedFish = { ...this.props.fish, [e.target.name]: e.target.value };
    this.props.updateState(this.props.index, updatedFish);
  };
  render() {
    const { fish } = this.props;
    return (
      <div className='fish-edit'>
        <input
          name='name'
          onChange={this.handleChange}
          value={fish.name}
          type='text'
          placeholder='Name'
        ></input>
        <input
          name='price'
          onChange={this.handleChange}
          value={fish.price}
          type='text'
          placeholder='Price'
        ></input>
        <select
          name='status'
          onChange={this.handleChange}
          value={fish.status}
          type='text'
          placeholder='Status'
        >
          <option value='available'>Fresh!</option>
          <option value='unavailable'>Sold Out!</option>
        </select>
        <textarea
          name='desc'
          onChange={this.handleChange}
          value={fish.desc}
          type='text'
          placeholder='Desc'
        ></textarea>
        <input
          name='image'
          onChange={this.handleChange}
          value={fish.image}
          type='text'
          placeholder='Image'
        ></input>
      </div>
    );
  }
}

export default EditFishForm;
