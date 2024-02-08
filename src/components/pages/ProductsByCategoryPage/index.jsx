import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsByCategory } from '../../../async_actions/products_req' 
import { useParams } from 'react-router-dom';
import ProductsContainer from '../../ProductsContainer';

export default function ProductsByCategoryPage() {

const dispatch = useDispatch();

const { category } = useParams();

useEffect(() => dispatch(getProductsByCategory(category)), []);

const products_state = useSelector(state => state.productsByCategory);



  return (
    <div>
      <ProductsContainer products_state={products_state}/>
    </div>
  )
}
