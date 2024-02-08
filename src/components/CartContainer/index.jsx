import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../CartItem';
import { clearCartAction } from '../../store/reducers/cartReducer';

export default function CartContainer() {

    const dispatch = useDispatch();

    const cart_state = useSelector(state => state.cart);

    const total = cart_state.reduce((acc, {price, count }) => acc + price * count , 0);

  return (
    <div>
        <div>
          {
              cart_state.map(el => <CartItem key={el.id} {...el} />)
          }
        </div>

        <p>Total: {total}€</p>

        <button onClick={() => dispatch
        (clearCartAction())}>Clear cart</button>
    </div>
  )
}
