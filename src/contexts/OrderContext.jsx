import { createContext, useEffect, useState } from "react";
import useAuth from "../hook/use-auth";
import validateCreateOrder from "../validator/order-validator";
import axios from "../config/axios";
import { toast } from "react-toastify";

export const OrderContext = createContext();

const cartOrderFromLocalStorage =
  JSON.parse(localStorage.getItem("cartOrder")) || [];

export default function OrderContextProvider({ children }) {
  const { authUser } = useAuth();
  const [address, setAddress] = useState(authUser.address || "");
  const [error, setError] = useState({});
  const [order, setOrder] = useState(cartOrderFromLocalStorage);
  const [payment, setPayment] = useState("");

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
      if (error.orderDetail) {
        const newError = { ...error };
        delete newError.orderDetail;
        setError(newError);
      }
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

  const totalPrice = order.reduce((acc, list) => {
    acc = acc + list.price * list.amount;
    return acc;
  }, 0);

  const createOrder = async () => {
    try {
      const orderDetail = order.map((el) => {
        return {
          menuId: el.id,
          amount: el.amount,
          price: el.price * el.amount,
        };
      });
      const input = {
        deliveryAddress: address,
        summaryPrice: totalPrice,
        userId: authUser.id,
        orderDetail,
      };
      console.log(input);
      const validatorError = validateCreateOrder(input);
      console.log(validatorError);
      if (validatorError) {
        return setError(validatorError);
      }
      const res = await axios.post("/order/create", input);
      console.log(res);
      toast.success(res.data.message);
      const createdOrder = res.data.createdOrder[0];
      setOrder([]);
    } catch (error) {
      toast.success(res.data.message);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        order,
        addToCart,
        removeFromCart,
        setOrder,
        totalPrice,
        createOrder,
        address,
        setAddress,
        error,
        setError,
        payment,
        setPayment,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
