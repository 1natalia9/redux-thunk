import './App.css';
import ProductsPage from './components/pages/ProductsPage';
import ProductDescriptionPage from './components/pages/ProductDescriptionPage';
import Layout from './components/Layout';
import CartPage from './components/pages/CartPage';
import CategoriesPage from './components/pages/CategoriesPage';
import ProductsByCategoryPage from './components/pages/ProductsByCategoryPage';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route path='/redux-thunk' element={<ProductsPage />} />
        <Route path='/product/:id' element={<ProductDescriptionPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/categories' element={<CategoriesPage />} />
        <Route path='/categories/:category' element={<ProductsByCategoryPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
