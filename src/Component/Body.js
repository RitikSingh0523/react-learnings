import ResCard from "./ResCard"
import ResData from "../utils/resData.json"
import { useEffect, useState } from "react"

const Body = () => {

    const [listResturant, setListResturant] = useState([])

    const fetchResturantList = async () => {
        try {
            const fetchData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.022120301504632&lng=80.1750718639601&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            const data = await fetchData.json();
            setListResturant(data.data.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants)

        } catch (error) {
            console.log("Error", error)
        }

    }
    useEffect(() => {
        fetchResturantList()
    }, [])
    return (
        <div>
            <div className="p-3 sticky top-[100px] ">
                Search
            </div>
            <div className="flex flex-wrap gap-[10px]">
                {listResturant.map((res, index) => {
                    return (<ResCard resData={res} key={index} />)
                })}
            </div>
        </div>
    )
}
export default Body