import React, { useMemo, useState, useCallback } from "react";

import StockContext from "./Context";

const StockProvider = ({ children }) => {
  const [stock, setStock] = useState({});

  const addStock = useCallback(
    (_newStock) => setStock(_newStock),
    []
  );

  const value = useMemo(() => {
    return {
      stock,
      addStock,
    };
  }, [stock, addStock]);

  return (
    <StockContext.Provider value={value}>{children}</StockContext.Provider>
  );
};
export default StockProvider;
