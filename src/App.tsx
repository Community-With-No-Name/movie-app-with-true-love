import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import "./App.css";
import { ToastProvider } from "react-toast-notifications";
import { lazy, Suspense } from "react";
import Fallback from "./components/fallback";
import AuthRoutes from "./components/authRoutes";
import Layout from "./components/layout";
const SignUpPage = lazy(() => import("./pages/signup"));
const LoginPage = lazy(() => import("./pages/login"));
const ForgotPasswordPg = lazy(() => import("./pages/forgotPassword"));
const ResetPasswordPg = lazy(() => import("./pages/resetPassword"));
const HomePg = lazy(() => import("./pages/homepage"));

function App() {
  const HomePage = () => {
    return (
      <Suspense fallback={<Fallback />}>
        <HomePg />
      </Suspense>
    );
  };

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
    <ToastProvider>
      <div className='app'>
        <Router>
          {/* <Layout> */}
          <Routes>
            <Route
              path='/'
              element={
                <div className='w-full'>
                  <HomePage />
                </div>
              }
            />
            <Route
              path='/movies'
              element={
                <div className='w-full'>
                  <HomePage />
                </div>
              }
            />
            <Route
              path='/tv-series'
              element={
                <div className='w-full'>
                  <HomePage />
                </div>
              }
            />
            <Route
              path='/upcoming'
              element={
                <div className='w-full'>
                  <HomePage />
                </div>
              }
            />

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
          {/* </Layout> */}
        </Router>
      </div>
    </ToastProvider>
  );
}

export default App;
