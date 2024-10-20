import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import Mens from './categories/Mens'
import Womens from './categories/Womens'
import Product from './components/Product'
import 'bootstrap/dist/css/bootstrap.min.css';
import WishList from './pages/WishList'
import Cart from './pages/Cart'


const App = () => {
  return (
   <>
   <BrowserRouter>
    <Navbar/>
    <div className='mt-16'>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/mens' element={<Mens/>}/>
            <Route path='/womens' element={<Womens/>}/>
            <Route path='/products/:id' element={<Product/>}/>
            <Route path='/wishlist' element={<WishList/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>

    </div>
   
   </BrowserRouter>

   </>
  )
}

export default App