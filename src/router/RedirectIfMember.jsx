import { Navigate } from "react-router-dom";
import useAuth from "../hook/use-auth";

export default function RedirectIfMember({ children }) {
  const { authUser } = useAuth();
  if (authUser?.role === "MEMBER") {
    return <Navigate to="/order" />;
  }
  return children;
}
