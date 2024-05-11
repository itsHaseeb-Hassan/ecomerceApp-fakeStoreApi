import './App.css';
import Layout from './components/Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import About from './components/About';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
function App() {
  return (
    <>
   <Routes>
    <Route path="/" element={<Layout><Products items="8"/></Layout>} />
    <Route path="/about" element={<Layout><About /></Layout>} />
    <Route path="/products" element={<Layout><ProductPage items=""/></Layout>} />
    <Route path="/cart" element={<Cart />} />
</Routes>
    </>
  );
}

export default App;
