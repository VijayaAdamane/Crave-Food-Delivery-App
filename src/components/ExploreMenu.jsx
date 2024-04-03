import { menu_list } from "../assets/assets";
import React from "react";

export default function ExploreMenu({ category, setCategory }) {
  return (
    <div className=" bg-gray-200 font-IBMSans pb-10 px-5 pt-10 lg:px-20" id="explore-menu">
      <h3 className="text-gray-800 text-4xl font-bold  pb-1 border-b-[5px] border-red-500 mb-10 mx-1">
        See What's on the Menu
      </h3>

      <p className=" text-gray-800 text-xl  font-normal text-center mb-10 leading-tight ">
        Discover a world of culinary delights with our diverse menu. From
        appetizers to desserts, explore an array of mouthwatering dishes crafted
        to tantalize your taste buds.
      </p>

      <div className="flex flex-row gap-2 justify-evenly flex-wrap  overflow-y-hidden">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className="w-30 p-2 flex flex-col items-center hover:scale-105"
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
          >
            <img
              src={item.menu_image}
              className={
                category === item.menu_name
                  ? "w-20 h-20 mb-2 border-4 border-[#EA3A36] rounded-full p-1 "
                  : "w-20 h-20 mb-2"
              }
              alt={item.menu_name}
            />
            <p className="text-2xl font-semibold text-gray-900">
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
