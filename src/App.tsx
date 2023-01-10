import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import "./App.css";
import React, { lazy, Suspense } from "react";
import Fallback from "./components/fallback/fallback";
import AuthRoutes from "./components/authRoutes/authRoutes";
const SignUpPage = lazy(() => import("./pages/signup"));
const LoginPage = lazy(() => import("./pages/login"));

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
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
