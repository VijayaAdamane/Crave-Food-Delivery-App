import ExploreMenu from "../../components/ExploreMenu";
import Header from '../../components/Header';
import { useState } from "react";
import FoodDisplay from "../../components/FoodDisplay";
export default function Home({setShowLogin}) {

  const [category, setCategory] = useState("All");
  return (
    <div className="justify-center items-center overflow-x-hidden">
      <Header setShowLogin={setShowLogin} />
      <ExploreMenu category={category} setCategory ={setCategory}/>
      <FoodDisplay category={category}></FoodDisplay>
    </div>
  );
}
