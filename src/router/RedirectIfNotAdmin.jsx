import { Navigate } from "react-router-dom";
import useAuth from "../hook/use-auth";

export default function RedirectIfNotAdmin({ children }) {
  const { authUser } = useAuth();
  if (authUser?.role !== "ADMIN") {
    return <Navigate to="/" />;
  }
  return children;
}
