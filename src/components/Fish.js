import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  static propTypes = {
    addToOrder: PropTypes.func,
    details: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string,
      desc: PropTypes.string,
      image: PropTypes.string,
    }),
  };
  handleClick = () => {
    this.props.addToOrder(this.props.index);
  };
  render() {
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === 'available';
    return (
      <div className='menu-fish'>
        <img src={image} alt={name} />
        <h3 className='fish-name'>
          {name}
          <span className='price'>{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button onClick={this.handleClick} disabled={!isAvailable}>
          {isAvailable ? 'Add To Cart' : 'Sold Out'}
        </button>
      </div>
    );
  }
}

Fish.propTypes = {};

export default Fish;
