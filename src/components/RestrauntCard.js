import React from 'react'
import {SWIGGY_IMG_URL} from '../utils/constant'
import { Link } from 'react-router-dom'

const RestrauntCard = (props) => {
  const {name,cloudinaryImageId,totalRatingsString,costForTwoString,id} = props.item.data
  // console.log(name)
     return (
      <Link to={`/restaurant/${id}`} className='res-card-link'>   
      <div className='res-card'>
        <img src={SWIGGY_IMG_URL+cloudinaryImageId} className='res-image' />
        <div className='res-content'>
        <p className='res-name'>{name}</p>
        <p>{totalRatingsString}</p>
        <p>{costForTwoString}</p>
        </div>
      </div>
      </Link>
  )
}

export default RestrauntCard