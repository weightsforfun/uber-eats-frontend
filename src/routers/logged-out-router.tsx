import React from "react";
import { isLoggedInVar } from "../apollo";
export const LoggedOutRouter = () => {
  const onClick = () => {
    isLoggedInVar(true);
  };
  return (
    <div>
      <h1>Logged out</h1>
      <button onClick={onClick}>click to log out</button>
    </div>
  );
};
