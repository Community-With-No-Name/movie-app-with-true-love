import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import Fallback from "./components/fallback/fallback";
import AuthRoutes from "./components/authRoutes/authRoutes";
const SignUpPage = lazy(() => import("./pages/signup"));
const LoginPage = lazy(() => import("./pages/login"));
const ForgotPasswordPg = lazy(() => import("./pages/forgotPassword"));
const ResetPasswordPg = lazy(() => import("./pages/resetPassword"));

function App() {
  const SignUp = () => {
    return (
      <Suspense fallback={<Fallback />}>
        <SignUpPage />
      </Suspense>
    );
  };
  const Login = () => {
    return (
      <Suspense fallback={<Fallback />}>
        <LoginPage />
      </Suspense>
    );
  };
  const ForgotPassword = () => {
    return (
      <Suspense fallback={<Fallback />}>
        <ForgotPasswordPg />
      </Suspense>
    );
  };
  const ResetPassword = () => {
    return (
      <Suspense fallback={<Fallback />}>
        <ResetPasswordPg />
      </Suspense>
    );
  };

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route
            element={
              <div>
                <Outlet />
              </div>
            }
          >
            <Route
              path='/signup'
              element={
                <AuthRoutes>
                  <SignUp />
                </AuthRoutes>
              }
            />
            <Route
              path='/login'
              element={
                <AuthRoutes>
                  <Login />
                </AuthRoutes>
              }
            />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/reset-password' element={<ResetPassword />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
