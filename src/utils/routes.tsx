import { ROUTE } from "../common/constants";
import { Login, Dashboard } from "./pageRoutes";

export const routes = [
  {
    element: <Login />,
    path: ROUTE.INDEX,
  },
  {
    element: <Dashboard />,
    path: ROUTE.DASHBOARD,
  },
];
