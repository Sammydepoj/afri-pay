import { ROUTE } from "../common/constants";
import { Login, Dashboard, UserMgt } from "./pageRoutes";

export const routes = [
  {
    element: <Login />,
    path: ROUTE.INDEX,
  },
  {
    element: <Dashboard />,
    path: ROUTE.DASHBOARD,
  },
  {
    element: <UserMgt />,
    path: ROUTE.USER_MGT,
  },
];
