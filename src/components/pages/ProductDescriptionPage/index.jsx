import React, { useEffect } from 'react'
import { getSingleProduct } from '../../../async_actions/products_req'
import { addToCartAction } from '../../../store/reducers/cartReducer';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import s from './index.module.css'
import { Link } from 'react-router-dom';

export default function ProductDescriptionPage() {

  const dispatch = useDispatch();
  const { id } = useParams();
  const product_state = useSelector(state => state.singleProduct);

  const { title, description, price, images, category } = product_state;

  const add_to_cart = () => dispatch(addToCartAction({ id: +id, title, price, images }))
  
  useEffect(() => {
    dispatch(getSingleProduct(id))
  }, []);


  return (
    <div className={s.product}>
      { images && <img src={images[0]} alt={title} /> }
       <p>Title: {title}</p>
       <p>Description: {description}</p>
       <p>Price: {price}€</p>
       <Link to={`/categories/${category}`}>
       <div className={s.category}>{ category }</div></Link>
       <div 
       className={s.add_btn}
       onClick={add_to_cart}
       >
        Add to cart
        </div>
    </div>
  )
}
