import { gql, useQuery } from "@apollo/client";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import { Header } from "../components/header";
import { useMe } from "../hooks/useMe";
import { NotFound } from "../pages/404";
import { Restaurants } from "../pages/client/restaurant";
import { Search } from "../pages/client/search";
import { ConfirmEmail } from "../user/confirm-email";
import { EditProfile } from "../user/edit-profile";
import { meQuery } from "../__generated__/meQuery";

const ClientRoutes = [
  <Route key={1} path="/" element={<Restaurants />}></Route>,
  <Route key={2} path="/confirm" element={<ConfirmEmail />}></Route>,
  <Route key={3} path="/edit-profile" element={<EditProfile />}></Route>,
  <Route key={4} path="/search" element={<Search />}></Route>,
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
        {data.me.role === "Client" && ClientRoutes}
        <Route element={<NotFound />}></Route>
      </Routes>
    </>
  );
};
