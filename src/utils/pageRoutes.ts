import { lazy } from "react";

const Login = lazy(() => import("../views/Login/Login"));
const Dashboard = lazy(() => import("../views/dashboard/dashboard"));

export { Login, Dashboard };
