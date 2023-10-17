import { createContext, useState } from "react";

export const OrderContext = createContext();

export default function OrderContextProvider({ children }) {
  const [order, setOrder] = useState({});

  const addToCart = (menuId) => {
    if (`${menuId}` in order) {
      return setOrder((prev) => ({ ...prev, [menuId]: prev[menuId] + 1 }));
    }
    return setOrder((prev) => ({ ...prev, [menuId]: 1 }));
  };

  const removeFromCart = (menuId) => {
    if (order && !order[menuId]) {
      return;
    }
    if (order && order[menuId] == 1) {
      delete order[menuId];
      const newOrder = { ...order };
      return setOrder(newOrder);
    }
    return setOrder((prev) => ({ ...prev, [menuId]: prev[menuId] - 1 }));
  };

  return (
    <OrderContext.Provider value={{ order, addToCart, removeFromCart }}>
      {children}
    </OrderContext.Provider>
  );
}
