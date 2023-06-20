import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import {SWIGGY_IMG_URL} from '../utils/constant'
import {AiFillStar} from 'react-icons/ai'
import { Image, Shimmer } from 'react-shimmer'
import useRestaurant from '../utils/useRestaurant'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'
const RestaurantDetail = () => {
   const {id} = useParams() 
   const [menu,setMenu] = useState([])   
   const restaurant = useRestaurant(id,setMenu)
   const dispatch = useDispatch()

   const handleClick = (item)=>{
       dispatch(addItem(item))
   }

  return  !restaurant ? <RestaurantShimmer/> :  (
    <div className='restaurant-description'>
        <Image src={SWIGGY_IMG_URL+restaurant.cloudinaryImageId} 
         fallback={<Shimmer width={600} height={400} />}
        />
        <div className='menu-info-container'>
            <div className='menu-info'>
                <p className='restaurant-name'>{restaurant.name}</p>
                <p>{restaurant.cuisines}</p>
                <p>{restaurant.city}</p>
            </div>
            <div>
                <div className='rating'>
                 <AiFillStar/>
                 <p>{restaurant.avgRating}</p>
                </div>
                <p>{restaurant.costForTwoMessage}</p>
                <p>{restaurant.totalRatingsString}</p>
            </div>
        </div>
        <div className='menu-container'>
           {menu?.map((item)=>{
            return (
                <> 
                <div className='menu-card'>
                    <div>
                    <p>{item.card.info.name}</p>
                    <p>₹{(item.card.info.price)/100}</p>
                    </div>
                    <div  className='menu-image-div'>
                    <img src={SWIGGY_IMG_URL+item.card.info.imageId}  className='menu-card-image'/>
                    <button onClick={()=>handleClick(item)} className='menu-card-btn'>Add item</button>
                    </div>
                </div>
                <hr className='line'/>
                </>
            )
           })}
        </div>
    </div>
  )
}

export default RestaurantDetail