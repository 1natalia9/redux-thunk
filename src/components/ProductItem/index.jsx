import React from 'react'
import { deleteProduct } from '../../store/reducers/productReducer'; 
import { useDispatch } from 'react-redux';
import s from './index.module.css'
import { Link } from 'react-router-dom'
import { addToCartAction } from '../../store/reducers/cartReducer';

export default function ProductItem({ id, title, description, price, images }) {
  const dispatch = useDispatch();
  const delete_product = (e) => {
    dispatch(deleteProduct(id));
    e.stopPropagation()
  }
  
  const add_to_cart = () => dispatch(addToCartAction({ id, title, price, images }))

  const product_route = `/product/${id}`


  return (
      <div className={s.card}>
        <p onClick={delete_product} className={s.deleteBtn}>X</p>
        <Link to={product_route}>
         <div className={s.card_info}>
          <p>Title: {title}</p>
          <p>Description: {description}</p>
          <p>Price: {price}</p>
         </div>
         </Link>
         <div 
         className={s.add_btn}
         onClick={add_to_cart}
         >
          Add to cart
          </div>
      </div>
  )
}
