import { Route, Router, Routes } from "react-router-dom";
import { CreateAccount } from "../pages/create-account";
import { Login } from "../pages/login";

export const LoggedOutRouter = () => {
  return (
    <Routes>
      <Route path="/create-account" element={<CreateAccount />}></Route>
      <Route path="/" element={<Login />}></Route>
    </Routes>
  );
};
