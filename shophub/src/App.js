
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Payment from './components/Payment';
import Product from './components/Product';
import Products from './components/Products';
import Signup from './components/Signup';

function App() {
  return (
   <div>
   <>
   <Navbar/>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
   </>
   </div>
  );
}

export default App;
