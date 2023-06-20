import React, { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useRestaurantList from "../utils/useRestaurantList";
import useOnline from "../utils/useOnline";

const Body = () => {
  
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

 const allrestaurant =useRestaurantList(setFilteredRestaurant)
 filterData(allrestaurant, searchText);

  // console.log("render")
  // console.log(filteredRestaurant)

  //  early Return
  //  if(!allrestaurant) return null;

  //  we want to early return this if a user is offline/online
  const isOnline = useOnline()

  if(!isOnline){
   return <h1>🥊Offline Check your internet Connection</h1>
  }

  //  chunking , code splitting , dynamic bundling , lazy loading , ondemand loading, Dynamic import 


  return allrestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="search">
        <div className="search-container">
          <input
            placeholder="Search"
            className="search-input"
            onChange={(e) => setSearchText(e.target.value)}
           
          />
          <button
            onClick={() => {
              const data = filterData(allrestaurant, searchText);
              console.log(data);
              setFilteredRestaurant(data);
            }}
            className="search-btn"
          >
            Search
          </button>
        </div>
      </div>
        <div className="res-container">
          {filteredRestaurant.length === 0 ? (
            <h1>No restaurant found</h1>
          ) : (
            filteredRestaurant?.map((item) => {
              return <RestrauntCard item={item} />;
            })
          )}
        </div>
    </div>
  );
};

export default Body;
