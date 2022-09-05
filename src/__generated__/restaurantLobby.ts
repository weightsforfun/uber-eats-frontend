/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RestaurantInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: restaurantLobby
// ====================================================

export interface restaurantLobby_restaurant_restaurant_category {
  __typename: "Category";
  name: string;
}

export interface restaurantLobby_restaurant_restaurant_menu_options_choices {
  __typename: "DishChoice";
  name: string;
  extra: number | null;
}

export interface restaurantLobby_restaurant_restaurant_menu_options {
  __typename: "DishOption";
  name: string;
  extra: number | null;
  choices: restaurantLobby_restaurant_restaurant_menu_options_choices[] | null;
}

export interface restaurantLobby_restaurant_restaurant_menu {
  __typename: "Dish";
  id: number;
  name: string;
  price: number;
  photo: string | null;
  description: string;
  options: restaurantLobby_restaurant_restaurant_menu_options[] | null;
}

export interface restaurantLobby_restaurant_restaurant {
  __typename: "Restaurant";
  id: number;
  name: string;
  coverImg: string;
  category: restaurantLobby_restaurant_restaurant_category | null;
  address: string;
  isPromoted: boolean;
  menu: restaurantLobby_restaurant_restaurant_menu[] | null;
}

export interface restaurantLobby_restaurant {
  __typename: "RestaurantOutput";
  ok: boolean;
  error: string | null;
  restaurant: restaurantLobby_restaurant_restaurant | null;
}

export interface restaurantLobby {
  restaurant: restaurantLobby_restaurant;
}

export interface restaurantLobbyVariables {
  input: RestaurantInput;
}
