import { Navigate } from "react-router-dom";
import { ChildrenParm } from "../interface/interface";

export default function AuthRoutes({ children }: ChildrenParm) {
  const user = localStorage.getItem("userToken");

  if (user) {
    return <Navigate to='/' replace />;
  }

  return children;
}
