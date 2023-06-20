export const filterData = (allrestaurant,searchText)=>{
    const filterRes = allrestaurant.filter((restaurant) =>  restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
    )
    return filterRes;
 }