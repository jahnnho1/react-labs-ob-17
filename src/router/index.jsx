import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Login from "../pages/Login";
import RecoveryPassword from "../containers/RecoveryPassword";
import CreateNewPassword from "../pages/CreateNewPassword";
import CreateNewAccount from "../pages/CreateNewAccount";
import EditAccount from "../pages/EditAccount";
import Products from "../components/Products";
import ErrorPage from "../pages/Error-page";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/create-new-account",
    element: <CreateNewAccount />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/edit-account",
    element: <EditAccount />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/recovery-password",
    element: <RecoveryPassword />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/create-new-password",
    element: <CreateNewPassword />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: <Products />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
