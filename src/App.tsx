import React from "react";
import { Route, Routes, useRoutes } from "react-router-dom";
import "./App.scss";
import { routes } from "./router/routes";

function App() {
  return useRoutes(routes);
}

export default App;
