import { createContext, useState } from "react";

export const OrderContext = createContext();

export default function OrderContextProvider({ children }) {
  const [order, setOrder] = useState({});

  return (
    <OrderContext.Provider value={{ order }}>{children}</OrderContext.Provider>
  );
}
