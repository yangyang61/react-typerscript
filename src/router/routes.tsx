import { lazy, ReactNode, Suspense } from "react";
import { RouteObject } from "react-router";
import AppLayout from "@/router/AppLayout";

const User = lazy(() => import(/* webpackChunkName: "User" */ "@/pages/User"));
const Index = lazy(
  () => import(/* webpackChunkName: "Index" */ "@/pages/Index")
);
const Detail = lazy(
  () => import(/* webpackChunkName: "Detail" */ "@/pages/Detail")
);
const Login = lazy(
  () => import(/* webpackChunkName: "Login" */ "@/pages/Login")
);
const lazyLoad = (children: ReactNode) => {
  return <Suspense fallback={<>Loading...</>}>{children}</Suspense>;
};
const Error404 = lazy(
  () => import(/*webpackChunkName: "404" */ "@/pages/Error/404")
);

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        path: "index",
        element: lazyLoad(<Index />),
      },
      {
        path: "user",
        element: lazyLoad(<User />),
      },
      {
        path: "user/detail/:id",
        element: lazyLoad(<Detail />),
      },
    ],
  },
  {
    path: "/login",
    element: lazyLoad(<Login />),
  },
  {
    path: "*",
    element: lazyLoad(<Error404 />),
  },
];
