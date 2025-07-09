import { RES_IMG } from "../utils/common";

const ResCard = ({ resData }) => {
    const { id, name, sla, cuisines, costForTwo, avgRating, cloudinaryImageId } = resData.info;

    return (
        <div className="w-[200px] p-2 box-border border border-transparent hover:cursor-pointer hover:border-amber-400 bg-[#f0f0f0]">
            <img
                src={RES_IMG + cloudinaryImageId}
                alt={name}
                className="w-full h-[100px] object-cover"
            />

            <div className="mt-2 text-sm font-semibold text-gray-800">
                {name}
            </div>

            <div className="text-xs text-gray-600">
                {cuisines.join(", ")}
            </div>

            <div className="text-xs text-gray-600">
                {costForTwo}
            </div>

            <div className="text-xs text-gray-600">
                ⭐ {avgRating} | {sla.deliveryTime} mins
            </div>
        </div>
    );
};

export default ResCard;
