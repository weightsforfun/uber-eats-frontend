/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CategoryInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: categoryPageQuery
// ====================================================

export interface categoryPageQuery_category_restaurants_category {
  __typename: "Category";
  name: string;
}

export interface categoryPageQuery_category_restaurants {
  __typename: "Restaurant";
  id: number;
  name: string;
  coverImg: string;
  category: categoryPageQuery_category_restaurants_category | null;
  address: string;
  isPromoted: boolean;
}

export interface categoryPageQuery_category_category {
  __typename: "Category";
  id: number;
  name: string;
  coverImg: string | null;
  categorySlug: string;
  restaturantCount: number;
}

export interface categoryPageQuery_category {
  __typename: "CategoryOutput";
  ok: boolean;
  error: string | null;
  totalPages: number | null;
  totalResults: number | null;
  restaurants: categoryPageQuery_category_restaurants[] | null;
  category: categoryPageQuery_category_category | null;
}

export interface categoryPageQuery_allCategories_categories {
  __typename: "Category";
  id: number;
  name: string;
  coverImg: string | null;
  categorySlug: string;
  restaturantCount: number;
}

export interface categoryPageQuery_allCategories {
  __typename: "AllCategoriesOutput";
  ok: boolean;
  error: string | null;
  categories: categoryPageQuery_allCategories_categories[] | null;
}

export interface categoryPageQuery {
  category: categoryPageQuery_category;
  allCategories: categoryPageQuery_allCategories;
}

export interface categoryPageQueryVariables {
  input: CategoryInput;
}
