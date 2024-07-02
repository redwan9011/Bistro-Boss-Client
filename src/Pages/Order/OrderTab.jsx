/* eslint-disable react/prop-types */
import FoodCard from "../SharedSection/FoodCard/FoodCard";


const OrderTab = ({ items }) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                {
                    items?.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default OrderTab;