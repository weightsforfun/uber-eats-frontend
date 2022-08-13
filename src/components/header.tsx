import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedInVar } from "../apollo";
import { useMe } from "../hooks/useMe";
import nuberLogo from "../images/logo.svg";

export const Header: React.FC = () => {
  const { data } = useMe();
  const navigate = useNavigate();
  const logout = () => {
    isLoggedInVar(false);
    navigate("/");
  };
  return (
    <>
      {!data?.me.verified && (
        <div className="bg-red-500 p-3 text-center text-base text-white">
          <span>Please verify your email.</span>
          <span>{data?.me.email}</span>
        </div>
      )}
      <header className="py-4">
        <div className="w-full px-5 xl:px-0 max-w-screen-2xl mx-auto flex justify-between items-center">
          <Link to="/">
            <img src={nuberLogo} className="w-44" alt="Nuber Eats" />
          </Link>
          <div>
            <span className="text-xs">
              <Link to="/edit-profile">
                <FontAwesomeIcon icon={faUser} className="text-3xl" />
              </Link>
            </span>
            <button onClick={logout} className=" mx-2">
              log out
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
