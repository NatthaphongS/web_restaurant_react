import { createContext, useEffect, useState } from "react";
import useAuth from "../hook/use-auth";
import validateCreateOrder from "../validator/order-validator";
import axios from "../config/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const OrderContext = createContext();

const cartOrderFromLocalStorage =
  JSON.parse(localStorage.getItem("cartOrder")) || [];

export default function OrderContextProvider({ children }) {
  const { authUser } = useAuth();
  const [address, setAddress] = useState(authUser.address || "");
  const [error, setError] = useState({});
  const [order, setOrder] = useState(cartOrderFromLocalStorage);
  const [payment, setPayment] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [trackOrder, setTrackOrder] = useState();
  const [ordering, setOrdering] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("cartOrder", JSON.stringify(order));
  }, [order]);

  useEffect(() => {
    axios
      .get(`/order/checkOrdering/${authUser.id}`)
      .then((res) => setOrdering(res.data))
      .catch((err) => console.log(err));
  }, []);

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

  const handleConfirmDelivery = async (id) => {
    try {
      setIsLoading(true);
      const res = await axios.patch(`/order/confirmDelivery/${id}`, {
        status: "COMPLETE",
      });
      const newTrackOrder = {
        ...trackOrder,
        status: res.data.status,
      };
      setTrackOrder(newTrackOrder);
      setOrdering();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

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
        paymentImage: payment,
        orderDetail,
      };
      // console.log(input);
      const validatorError = validateCreateOrder(input);
      // console.log(validatorError);
      if (validatorError) {
        return setError(validatorError);
      }
      input.orderDetail = JSON.stringify(input.orderDetail);
      const formData = new FormData();
      for (let key in input) {
        if (input[key]) {
          formData.append(`${key}`, input[key]);
        }
      }
      setIsLoading(true);
      const res = await axios.post("/order/create", formData);
      setTrackOrder(res.data.createdOrder);
      setPayment();
      setOrder([]);
      navigate(`/order/trackorder/${res.data.createdOrder.id}`);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.success(error);
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
        isLoading,
        setIsLoading,
        trackOrder,
        setTrackOrder,
        ordering,
        setOrdering,
        handleConfirmDelivery,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
