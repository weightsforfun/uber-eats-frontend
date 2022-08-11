import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { RESTAURANT_FRAGMENT } from "../../fragment";
import {
  restaurantLobby,
  restaurantLobbyVariables,
} from "../../__generated__/restaurantLobby";

const RESTAURANT_LOBBY_QUERY = gql`
  query restaurantLobby($input: RestaurantInput!) {
    restaurant(input: $input) {
      ok
      error
      restaurant {
        ...RestaurantParts
      }
    }
  }
  ${RESTAURANT_FRAGMENT}
`;

interface IRestaurantParams {
  id: string;
}

export const RestaurantLobby = () => {
  const params = useParams<{ id: string }>();
  const { loading, data } = useQuery<restaurantLobby, restaurantLobbyVariables>(
    RESTAURANT_LOBBY_QUERY,
    {
      variables: {
        input: {
          restaurantId: +(params.id ?? ""),
        },
      },
    }
  );
  return (
    <div>
      <Helmet>
        <title>{data?.restaurant.restaurant?.name || ""} | Nuber Eats</title>
      </Helmet>
      <div
        className=" bg-gray-800 bg-center bg-cover py-48"
        style={{
          backgroundImage: `url(${data?.restaurant.restaurant?.coverImg})`,
        }}
      >
        <div className="bg-white w-3/12 py-8 pl-48">
          <h4 className="text-4xl mb-3">{data?.restaurant.restaurant?.name}</h4>
          <h5 className="text-sm font-light mb-2">
            {data?.restaurant.restaurant?.category?.name}
          </h5>
          <h6 className="text-sm font-light">
            {data?.restaurant.restaurant?.address}
          </h6>
        </div>
      </div>
    </div>
  );
};
