import { Route, Router, Routes } from "react-router-dom";
import { NotFound } from "../pages/404";
import { CreateAccount } from "../pages/create-account";
import { Login } from "../pages/login";
import { Main } from "../pages/main";

export const LoggedOutRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/create-account" element={<CreateAccount />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </>
  );
};
