import React, { Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
function renderRoute(route: any) {
  return route.map((item: any) => (
    <Route
      path={item.path}
      key={item.path}
      element={() => {
        if (item.childRoutes) {
          return renderRoute(item.childRoutes);
        } else {
          return <item.component />;
        }
      }}
    />
  ));
}
function RouterView() {
  return (
    <BrowserRouter>
      <header>
        <ol>
          <Link to="/index" style={{ padding: 5 }}>
            Home
          </Link>
          <Link to="/about" style={{ padding: 5 }}>
            About
          </Link>
        </ol>
      </header>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {renderRoute(routes)}
        </Routes>
      </Suspense> */}
    </BrowserRouter>
  );
}
export default RouterView;
