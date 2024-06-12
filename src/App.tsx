import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AppRoutes } from "./routes/AppRoutes";

export const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  );
};
