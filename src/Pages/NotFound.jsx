import React from "react";
import { useLocation } from "react-router-dom";
const NotFound = () => {
  const { pathname } = useLocation();

  return <h1>Not Found {pathname}</h1>;
};

export default NotFound;
