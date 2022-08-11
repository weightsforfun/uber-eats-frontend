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

export interface restaurantLobby_restaurant_restaurant {
  __typename: "Restaurant";
  id: number;
  name: string;
  coverImg: string;
  category: restaurantLobby_restaurant_restaurant_category | null;
  address: string;
  isPromoted: boolean;
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
