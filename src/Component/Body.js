import ResCard from "./ResCard";
import ResData from "../utils/resData.json";
import { useEffect, useState } from "react";
import Simmer from "./Simmer";

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]); // Original full list
    const [listRestaurant, setListRestaurant] = useState([]); // Displayed list
    const [clickTopRestaurant, setClickTopRestaurant] = useState(false);

    const fetchRestaurantList = async () => {
        try {
            const fetchData = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.022120301704632&lng=80.1750718639601&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const data = await fetchData.json();

            const restaurants =
                data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

            setAllRestaurants(restaurants); // store full list
            setListRestaurant(restaurants); // show full list initially
        } catch (error) {
            console.log("Error", error);
        }
    };

    const handleClick = () => {
        setClickTopRestaurant(!clickTopRestaurant);
    };

    useEffect(() => {
        if (clickTopRestaurant) {
            const topRestaurants = allRestaurants.filter(
                (res) => res?.info?.avgRating >= 4.5
            );
            setListRestaurant(topRestaurants);
        } else {
            setListRestaurant(allRestaurants);
        }
    }, [clickTopRestaurant, allRestaurants]);

    useEffect(() => {
        fetchRestaurantList();
    }, []);

    return (
        <div className="px-5">
            <div className="p-3 sticky top-[100px] z-10 bg-white">
                <button
                    className="bg-[#f0f0f0] px-3 py-2 rounded-lg text-[#3d3d3d] font-semibold"
                    onClick={handleClick}
                >
                    {clickTopRestaurant ? "Show All Restaurants" : "Top Restaurants"}
                </button>
            </div>

            <div className="flex flex-wrap gap-[10px] justify-center">
                {listRestaurant.length > 0 ? (
                    listRestaurant.map((res) => (
                        <ResCard resData={res} key={res?.info?.id} />
                    ))
                ) : (
                    <Simmer />
                )}
            </div>
        </div>
    );
};

export default Body;
