import React from "react";
import { StockProvider } from "./Stock";

const GlobalContext = ({ children }) => {
  return <StockProvider>{children}</StockProvider>;
};

export default GlobalContext;
