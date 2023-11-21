
import './App.css';
import Header from './common/header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Pages from './pages/Pages';
import Data from './components/Data'
import { useState } from 'react'
import Cart from './common/Cart/Cart';
import Sdata from "./components/shops/Sdata";
import Footer from './common/footer/Footer';

function App() {
  
  const { shopItems } = Sdata

  const { productItems } = Data


  const [cardItem, setCardItem] = useState([])

  const addToCart = (product) => {
    const productExit = cardItem.find((item) => item.id === product.id)
    if (productExit) {
      setCardItem(cardItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCardItem([...cardItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {

    const productExit = cardItem.find((item) => item.id === product.id)

    if (productExit.qty === 1) {
      setCardItem(cardItem.filter((item) => item.id !== product.id))
    } else {

      setCardItem(cardItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  const removeCart = (product) => {
    setCardItem(cardItem.filter((item) => item.id !== product.id))
  }
  
  return (
    <>
      <BrowserRouter>
        <Header cardItem={cardItem} />
        <Routes>
          <Route path='/' element={<Pages productItems={productItems}
            addToCart={addToCart} cardItem={cardItem}
            shopItems={shopItems} />} />
          <Route path='/cart' element={<Cart cardItem={cardItem} addToCart={addToCart}
            decreaseQty={decreaseQty}
            removeCart={removeCart}
          />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
