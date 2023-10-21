import { Navigate } from "react-router-dom";

import useOrder from "../hook/use-order";

export default function RedirectIfOrdering({ children }) {
  const { ordering } = useOrder();
  if (ordering) {
    return <Navigate to={`/order/trackorder/${ordering.id}`} />;
  }
  return children;
}
