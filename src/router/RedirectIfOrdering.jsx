import { Navigate } from "react-router-dom";

import useOrder from "../hook/use-order";
import { useEffect } from "react";
import axios from "../config/axios";
import useAuth from "../hook/use-auth";

export default function RedirectIfOrdering({ children }) {
  const { authUser } = useAuth();
  const { ordering, setOrdering } = useOrder();

  if (ordering) {
    return <Navigate to={`/order/trackorder/${ordering?.id}`} />;
  }
  return children;
}
