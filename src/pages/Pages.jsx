
import React from 'react'
import FlashDeals from '../components/flashDeals/FlashDeals'
import Home from '../components/MainPage/Home'
import TopCate from '../components/top/TopCate'
import NewArrivals from '../components/newarrivals/NewArrivals'
import Discount from '../components/discount/Discount'
import Shop from '../components/shops/Shop'
import Wrapper from '../components/wrapper/Wrapper'
const Pages = ({productItems,addToCart,cardItem,shopItems}) => {
  return (
    <div>
      <Home  cardItem={cardItem}/>
      <FlashDeals productItems={productItems} addToCart={addToCart}   cardItem={cardItem}/>
      <TopCate/>
      <NewArrivals/>
      <Discount/>
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Wrapper />
    </div>
  )
}

export default Pages
