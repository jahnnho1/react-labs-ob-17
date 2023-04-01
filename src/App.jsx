import React from "react";
import { RouterProvider} from "react-router-dom";
import { router } from "./router/index";
import Layout from "./containers/Layout";
import "./styles/global.scss";



const App = () => {
  return (
    <Layout>
        <RouterProvider router={router} />
     </Layout> 
  );
};

export default App;
