import './App.css';
import Layout from './components/Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import About from './components/About';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import ProceedForm from './components/ProceedForm';
import AdminMain from './Admin/AdminMain';
import ChartComponent from './Admin/components/ChartComponent'
import ProductForm from './Admin/components/Product/ProductForm';
import ViewOrder from './Admin/components/Order/ViewOrder';
function App() {
  return (
    <>
   <Routes>
    <Route path="/" element={<Layout><Products items="8"/></Layout>} />
    <Route path="/about" element={<Layout><About /></Layout>} />
    <Route path="/products" element={<Layout><ProductPage items=""/></Layout>} />
    <Route path="/cart" element={<Cart />} />
    <Route path='/proceedForm' element={<ProceedForm />}/>
    <Route path="/dashboard" element={<AdminMain ><ChartComponent /></AdminMain>} />
    <Route path="/product/add" element={<AdminMain ><ProductForm /></AdminMain>} />
    <Route path="/order" element={<AdminMain ><ViewOrder /></AdminMain>} />
</Routes>
    </>
  );
}

export default App;
