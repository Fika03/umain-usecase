import { IRestaurant } from "@/models/IRestaurant";
import React from "react";

interface IRestaurantCardProps {
  restaurant: IRestaurant;
}

const RestaurantCard = ({ restaurant }: IRestaurantCardProps) => {
  return (
    <article
      className="bg-white w-full h-[200px] border rounded"
      key={restaurant.id}
    >
      <h2>{restaurant.name}</h2>
    </article>
  );
};

export default RestaurantCard;
