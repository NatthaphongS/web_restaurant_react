import { createContext, useEffect, useState } from "react";

export const OrderContext = createContext();

const cartOrderFromLocalStorage =
  JSON.parse(localStorage.getItem("cartOrder")) || [];

export default function OrderContextProvider({ children }) {
  const [order, setOrder] = useState(cartOrderFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("cartOrder", JSON.stringify(order));
  }, [order]);

  //menuDetail ={id:1,menuImage:dsajdkl,menuName:dasjkhd,price:50}

  const addToCart = (menuDetail) => {
    const menuExistIndex = order.findIndex((el) => el.id === menuDetail.id);
    if (menuExistIndex !== -1) {
      setOrder((prev) => {
        const updatedOrder = [...prev];
        updatedOrder[menuExistIndex].amount += 1;
        return updatedOrder;
      });
    } else {
      setOrder((prev) => [...prev, { ...menuDetail, amount: 1 }]);
    }
    return;
  };

  const removeFromCart = (menuDetail) => {
    const menuExistIndex = order.findIndex((el) => el.id === menuDetail.id);
    if (menuExistIndex !== -1) {
      if (order[menuExistIndex].amount > 1) {
        setOrder((prev) => {
          const updatedOrder = [...prev];
          updatedOrder[menuExistIndex].amount -= 1;
          return updatedOrder;
        });
      } else {
        setOrder((prev) => {
          const updatedOrder = [...prev];
          updatedOrder.splice(menuExistIndex, 1);
          return updatedOrder;
        });
      }
      return;
    }
  };

  return (
    <OrderContext.Provider value={{ order, addToCart, removeFromCart }}>
      {children}
    </OrderContext.Provider>
  );
}
