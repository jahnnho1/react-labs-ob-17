import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Login from "../containers/Login";
import RecoveryPassword from "../containers/RecoveryPassword";
import CreateNewAccount from "../containers/CreateNewAccount";
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
    path: "/recovery-password",
    element: <RecoveryPassword />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/create-new-account",
    element: <CreateNewAccount />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
