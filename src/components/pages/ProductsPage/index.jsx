import React, { useEffect } from 'react'
import AddProductForm from '../../AddProductForm'
import ProductsContainer from '../../ProductsContainer'
import { getProducts } from '../../../async_actions/products_req';
import { useDispatch, useSelector } from 'react-redux';

export default function ProductsPage() {
  const products_state = useSelector((store) => store.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts)
  }, []);

  return (
    <div>
        <AddProductForm />
        <ProductsContainer products_state={products_state} />
    </div>
  )
}
