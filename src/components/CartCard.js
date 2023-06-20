import React from 'react'
import {SWIGGY_IMG_URL} from '../utils/constant'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { removeItem } from '../utils/cartSlice'

const CartCard = (props) => {
  const dispatch = useDispatch()
  const {name,imageId,price,defaultPrice,id,category} = props.card.info
  
  const handleDelete = (id)=>{
    console.log(id)
    dispatch(removeItem(id))
  }
  // console.log(name)
     return (
      <div className='res-card'>
        <img src={SWIGGY_IMG_URL+imageId} className='res-image' />
        <div className='res-content'>
        <p className='res-name'>{name}</p>
        <p>{category}</p>
        <p>${price ? price/100 : defaultPrice/100}</p>
        </div>
        <AiFillDelete className='delete-icons' onClick={()=>handleDelete(id)}/>
      </div>
  )
}

export default CartCard