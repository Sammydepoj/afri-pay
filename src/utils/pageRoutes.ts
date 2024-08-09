import { lazy } from "react";

const Login = lazy(() => import("../views/Login/Login"));
const Dashboard = lazy(() => import("../views/dashboard/dashboard"));
const UserMgt = lazy(() => import("../views/users/UserMgt"));
const ForgotPassword = lazy(
  () => import("../views/ForgotPassword/ForgotPassword")
);

export { Login, Dashboard, UserMgt, ForgotPassword };
