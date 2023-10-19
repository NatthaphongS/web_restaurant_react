import { createContext, useEffect, useState } from "react";
import axios from "../config/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ManageContext = createContext();

export default function ManageContextProvider({ children }) {
  const [allOrders, setAllOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    setOrderId(id);
    return navigate(`/admin/orders/manageOrder/${id}`);
  };

  useEffect(() => {
    axios
      .get(`/order/allOrders`)
      .then((res) => {
        if (res?.data) {
          setAllOrders(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(allOrders);

  return (
    <ManageContext.Provider
      value={{
        isLoading,
        setIsLoading,
        allOrders,
        setAllOrders,
        handleNavigate,
        orderId,
      }}
    >
      {children}
    </ManageContext.Provider>
  );
}
