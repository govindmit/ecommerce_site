import React from "react";
import Sidebar from "./layouts/admin/sidebar";
import Header from "./layouts/admin/header";
import Routing from "./routes";
import { useLocation } from "react-router-dom";

const App = () => {
  const location: any = useLocation();
  console.log(location.pathname);
  return (location.pathname !== "/not-found" && location.pathname !== "/" &&  location.pathname !== '/login' &&  location.pathname !== '/register')? (
    <Sidebar>
      <Header />
      <div className="overflow-y-auto h-screen">
        <Routing />
      </div>
    </Sidebar>
  ) : (
    <div className="overflow-y-auto h-screen">
      <Routing />
    </div>
  );
};

export default App;
