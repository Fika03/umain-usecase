import RestaurantCard from "@/components/RestaurantCard";
import { IRestaurant } from "@/models/IRestaurant";
import { getRestaraunts } from "@/utils/getRestaurants";

export default async function Home() {
  const res = await getRestaraunts();

  const restaurants: IRestaurant[] = res.restaurants;

  return (
    <main className="bg-gray-100 flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <h2 className=" text-xl">Restaurant's</h2>
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} key={restaurant.id} />
        ))}
      </section>
    </main>
  );
}
