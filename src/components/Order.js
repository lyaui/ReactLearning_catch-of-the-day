import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
  // 因為全寫在render太多太雜了，所以拆出來寫
  renderOrder = (key) => {
    const { fishes, order } = this.props;
    const fish = fishes[key];
    const count = order[key];
    const isAvailable = fish.status === 'available';
    if (!isAvailable)
      return <li key={key}>Sorry {fish ? fish.name : 'fish'} is no longer available.</li>;
    return (
      <li key={key}>
        {count} lbs {fish.name} {formatPrice(count * fish.price)}
      </li>
    );
  };
  render() {
    const { fishes, order } = this.props;
    const orderIds = Object.keys(order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fishPrice = fishes[key].price;
      const fishCount = order[key];
      const isAvailable = fishes[key] && fishes[key].status === 'available';
      if (isAvailable) prevTotal += fishPrice * fishCount;
      return prevTotal;
    }, 0);
    return (
      <div className='order-wrap'>
        <h2>Order</h2>
        <ul className='order'>{orderIds.map(this.renderOrder)}</ul>
        <div className='total'>
          Total:<strong>{formatPrice(total)}</strong>
        </div>
        <ul>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default Order;
