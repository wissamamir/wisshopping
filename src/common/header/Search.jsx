import React from "react"
import logo from "../../components/assets/images/logo.svg"
import { Link } from "react-router-dom"

const Search = ({ cardItem }) => {


  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <Link to='/'>
              <img src={logo} alt='' />
            </Link>
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search what u want...' />
            <span>All Category</span>
          </div>

          <div className='icon f_flex width'>

            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{cardItem.length === 0 ? '' : cardItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
