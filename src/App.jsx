import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index";
import Layout from "./containers/Layout";
import AppContext from "./context/AppContext";
import useInitialState from "./hooks/useInitialState";
import "./styles/global.scss";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={ initialState }>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </AppContext.Provider>
  );
};

export default App;
