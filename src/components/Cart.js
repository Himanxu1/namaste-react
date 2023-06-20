import React from 'react'
import {SWIGGY_IMG_URL} from '../utils/constant'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CartCard from './CartCard'
import { removeItem } from '../utils/cartSlice'

const Cart = () => {
    const cartItem = useSelector(store => store.cart.items)
    const dispatch = useDispatch()
    console.log(cartItem)
   const handleClear = (item)=>{
       dispatch(removeItem())
   }
  
  // console.log(name)
     return (
      <div>
        <div className='cart-head'>
            <h1 className='cart-item'>Cart Items :- {cartItem.length}</h1>
            <div>
            <button onClick={handleClear} className='clear-btn'>Clear</button>
            </div>
        </div>
        <div className='cart-restaurants'>
            {cartItem.map((item)=>{
                return (
                    <>
                    <CartCard {...item} />
                    </>
                )
            })}
        </div>
      </div>
  )
}

export default Cart