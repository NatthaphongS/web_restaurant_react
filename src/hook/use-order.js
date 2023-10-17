import { useContext } from "react";
import { OrderContext } from "../contexts/OrderContext";

export default function useOrder() {
  return useContext(OrderContext);
}
