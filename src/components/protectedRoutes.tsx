import { ChildrenParm } from "../interface/interface";
import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({ children }: ChildrenParm) {
  const user = localStorage.getItem("isUserDetails");
  if (!user) {
    // this prevents non logged in users from accessing certain pages
    return <Navigate to='/login' />;
  }
  return children;
}
