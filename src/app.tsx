import React from "react";
import Sidebar from "./layouts/admin/sidebar";
import Header from "./layouts/admin/header";
import Routing from "./routes";
import { useLocation } from "react-router-dom";

const App = () => {
  const location: any = useLocation();
  return location.pathname !== "/not-found" || location.pathname !== "/" ? (
    <Sidebar>
      <Header />
      <div className="overflow-y-auto pb-20 h-screen">
        <Routing />
      </div>
    </Sidebar>
  ) : (
    <div className="overflow-y-auto pb-20 h-screen">
      <Routing />
    </div>
  );
};

export default App;
