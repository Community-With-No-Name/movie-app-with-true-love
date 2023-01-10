import { Navigate } from "react-router-dom";
import { AuthProps } from "../../interface/interface";

export default function AuthRoutes({ children }: AuthProps) {
  const user = localStorage.getItem("isUserDetails");

  if (user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to='/me/home' replace />;
  }

  return children;
}
