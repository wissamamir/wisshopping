import React from 'react'
import Head from './Head'
import Search from './Search'
import './Header.css'
const Header = ({cardItem}) => {
  return (
    <>
    <Head/>
    <Search cardItem={cardItem}/>
 
    </>
  )
}

export default Header

