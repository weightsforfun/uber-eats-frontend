import { gql, useQuery } from "@apollo/client";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import { Header } from "../components/header";
import { useMe } from "../hooks/useMe";
import { Restaurants } from "../pages/client/restaurant";
import { meQuery } from "../__generated__/meQuery";

const ClientRoutes = [<Route path="/" element={<Restaurants />}></Route>];

const ME_QUERY = gql`
  query meQuery {
    me {
      id
      email
      role
      verified
    }
  }
`;

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
        {data.me.role === "Client" && ClientRoutes}
        <Route path="/" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
