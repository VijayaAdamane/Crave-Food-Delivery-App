import { useContext } from "react"
import { StoreContext } from "../context/StoreContext"
import FoodItem from "./FoodItem";

export default function FoodDisplay({category}){
    const {food_list} = useContext(StoreContext);
    return (
        <div className=" bg-gray-200 font-IBMSans pb-10 px-2 lg:px-10">
            <h3 className="pt-10 text-gray-800 text-4xl font-bold  pb-1 border-b-[5px] border-red-500 mb-10 mx-10">Top dishes near you </h3> 

            <div className="flex flex-row flex-wrap gap-9 justify-center ">
              {food_list.map((item,index) =>{
                  console.log(category, item.category)
                if(category==="All" || category===item.category){
                return(
                    <FoodItem key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image} ></FoodItem>
                    )
                }
              })}  
            </div>
        </div>
    )
}