import { gql, useQuery } from "@apollo/client";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import { Header } from "../components/header";
import { Restaurant } from "../components/restaurant";
import { useMe } from "../hooks/useMe";
import { NotFound } from "../pages/404";
import { Category } from "../pages/client/category";
import { RestaurantLobby } from "../pages/client/restaurantLobby";
import { Restaurants } from "../pages/client/restaurants";
import { Search } from "../pages/client/search";
import { AddDish } from "../pages/owner/add-dish";
import { AddRestaurant } from "../pages/owner/add-restaurants";
import { MyRestaurant } from "../pages/owner/my-restaurant";
import { MyRestaurants } from "../pages/owner/my-restaurants";
import { ConfirmEmail } from "../user/confirm-email";
import { EditProfile } from "../user/edit-profile";

const clientRoutes = [
  {
    path: "/",
    component: <Restaurants />,
  },
  {
    path: "/search",
    component: <Search />,
  },
  {
    path: "/category/:slug",
    component: <Category />,
  },
  {
    path: "/restaurants/:id",
    component: <Restaurants />,
  },
  {
    path: "/restaurantLobby/:id",
    component: <RestaurantLobby />,
  },
];
const commonRoutes = [
  { path: "/confirm", component: <ConfirmEmail /> },
  { path: "/edit-profile", component: <EditProfile /> },
];

const restaurantRoutes = [
  { path: "/", component: <MyRestaurants /> },
  { path: "/add-restaurant", component: <AddRestaurant /> },
  { path: "/restaurantLobby/:id", component: <MyRestaurant /> },
  { path: "/restautantLobby/:id/add-dish", component: <AddDish /> },
];

export const LoggedInRouter = () => {
  const { data, loading, error } = useMe();
  console.log(error);
  if (!data || loading || error) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="font-medium text-xl tracking-wide">Loading...</span>
      </div>
    );
  }
  return (
    <>
      <Header></Header>
      <Routes>
        {data.me.role === "Client" &&
          clientRoutes.map((route) => (
            <Route
              element={route.component}
              key={route.path}
              path={route.path}
            ></Route>
          ))}
        {data.me.role === "Owner" &&
          restaurantRoutes.map((route) => (
            <Route
              element={route.component}
              key={route.path}
              path={route.path}
            ></Route>
          ))}
        {commonRoutes.map((route) => (
          <Route
            element={route.component}
            key={route.path}
            path={route.path}
          ></Route>
        ))}
        <Route element={<NotFound />}></Route>
      </Routes>
    </>
  );
};
