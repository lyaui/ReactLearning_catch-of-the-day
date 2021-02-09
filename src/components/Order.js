import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Order extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    order: PropTypes.object,
    deleteOrder: PropTypes.func,
  };
  // 因為全寫在render太多太雜了，所以拆出來寫
  renderOrder = (key) => {
    const { fishes, order } = this.props;
    // make sure the fish is loaded before we continue
    if (!Object.keys(fishes).length) return;
    const fish = fishes[key];
    const count = order[key];
    const isAvailable = fish.status === 'available';
    const transitionOption = {
      classNames: 'order',
      key,
      timeout: { enter: 500, exit: 500 },
    };

    if (!isAvailable) {
      return (
        <CSSTransition {...transitionOption}>
          <li key={key}>Sorry {fish ? fish.name : 'fish'} is no longer available.</li>;
        </CSSTransition>
      );
    }
    return (
      <CSSTransition {...transitionOption}>
        <li key={key}>
          {count} lbs {fish.name} {formatPrice(count * fish.price)}
          <button onClick={() => this.props.deleteOrder(key)}>&times;</button>
        </li>
      </CSSTransition>
    );
  };
  render() {
    const { fishes, order } = this.props;
    // make sure the fish is loaded before we continue
    if (!Object.keys(fishes).length) return null;
    const orderIds = Object.keys(order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = fishes[key];
      const count = order[key];
      const isAvailable = fishes[key] && fishes[key].status === 'available';
      if (isAvailable) prevTotal += fish.price * count;
      return prevTotal;
    }, 0);
    return (
      <div className='order-wrap'>
        <h2>Order</h2>
        <TransitionGroup component='ul' className='order'>
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>
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
