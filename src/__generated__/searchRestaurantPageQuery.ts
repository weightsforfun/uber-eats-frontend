/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SearchRestaurantInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: searchRestaurantPageQuery
// ====================================================

export interface searchRestaurantPageQuery_searchRestaurant_restaurants_category {
  __typename: "Category";
  name: string;
}

export interface searchRestaurantPageQuery_searchRestaurant_restaurants {
  __typename: "Restaurant";
  id: number;
  name: string;
  coverImg: string;
  category: searchRestaurantPageQuery_searchRestaurant_restaurants_category | null;
  address: string;
  isPromoted: boolean;
}

export interface searchRestaurantPageQuery_searchRestaurant {
  __typename: "SearchRestaurantOutput";
  ok: boolean;
  error: string | null;
  totalPages: number | null;
  totalResults: number | null;
  restaurants: searchRestaurantPageQuery_searchRestaurant_restaurants[] | null;
}

export interface searchRestaurantPageQuery_allCategories_categories {
  __typename: "Category";
  id: number;
  name: string;
  coverImg: string | null;
  categorySlug: string;
  restaturantCount: number;
}

export interface searchRestaurantPageQuery_allCategories {
  __typename: "AllCategoriesOutput";
  ok: boolean;
  error: string | null;
  categories: searchRestaurantPageQuery_allCategories_categories[] | null;
}

export interface searchRestaurantPageQuery {
  searchRestaurant: searchRestaurantPageQuery_searchRestaurant;
  allCategories: searchRestaurantPageQuery_allCategories;
}

export interface searchRestaurantPageQueryVariables {
  input: SearchRestaurantInput;
}
