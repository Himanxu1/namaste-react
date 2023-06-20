
import React,{useState,useEffect} from "react"

const useRestaurant = (id,setMenu) => {
    const [restaurant,setRestaurant] = useState({})
   
    useEffect(()=>{
        getRestaurantById()
     },[id])
    async function getRestaurantById(){
        const res = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3347721&lng=78.05199809999999&restaurantId=${id}&submitAction=ENTER`)
        const data = await res.json()
        setRestaurant(data.data.cards[0].card.card.info)
        setMenu(data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
        console.log(data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
       }
    return restaurant
}

export default useRestaurant