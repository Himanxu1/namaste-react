import React,{useState,useEffect} from 'react'
import { SWIGGY_RESTAURANT_LIST} from './constant'

const useRestaurantList = (setFilteredRestaurant) => {
    const [allrestaurant, setAllRestaurant] = useState([]);
    useEffect(() => {
        getRestaurant();
      }, []);
    
      async function getRestaurant() {
        const res = await fetch(SWIGGY_RESTAURANT_LIST);
        const data = await res.json();
        // console.log(data.data.cards[2].data.data.cards)
        setAllRestaurant(data.data.cards[2].data.data.cards);
        setFilteredRestaurant(data.data.cards[2].data.data.cards);
      }
    
     return  allrestaurant
}

export default useRestaurantList