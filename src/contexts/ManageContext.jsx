import { createContext, useEffect, useState } from "react";
import axios from "../config/axios";

export const ManageContext = createContext();

export default function ManageContextProvider({ children }) {
  const [allOrders, setAllOrders] = useState([]);
  const [searchOrders, setSearchOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [targetOrder, setTargetOrder] = useState({});
  const [searchId, setSearchId] = useState("");

  useEffect(() => {
    axios
      .get(`/order/allOrders`)
      .then((res) => {
        if (res?.data) {
          setAllOrders(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, [targetOrder]);
  // console.log(allOrders);

  const handleSearch = (id) => {
    setSearchOrders(
      allOrders.filter((el) => {
        return el.id.startsWith(id);
      })
    );
  };

  const updateOrder = async (id, status) => {
    try {
      setIsLoading(true);
      const res = await axios.patch(`/order/update/${id}`, { status });
      const newTargetOrder = {
        ...targetOrder,
        status: res.data.status,
      };
      setTargetOrder(newTargetOrder);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const cancleOrder = async (comment, id) => {
    try {
      setIsLoading(true);
      const res = await axios.patch(`/order/cancle/${id}`, { comment });
      const newTargetOrder = {
        ...targetOrder,
        status: res.data.status,
        comment: res.data.comment,
      };
      setTargetOrder(newTargetOrder);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ManageContext.Provider
      value={{
        isLoading,
        setIsLoading,
        allOrders,
        setAllOrders,
        targetOrder,
        setTargetOrder,
        cancleOrder,
        updateOrder,
        searchId,
        setSearchId,
        handleSearch,
        searchOrders,
      }}
    >
      {children}
    </ManageContext.Provider>
  );
}
