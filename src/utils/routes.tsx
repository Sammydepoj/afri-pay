import { ROUTE } from "../common/constants";
import { Login, Dashboard, UserMgt, ForgotPassword } from "./pageRoutes";
import { ProtectedRoutes } from "./protected-routes";

export const routes = [
  {
    element: <Login />,
    path: ROUTE.INDEX,
  },
  {
    element: <ForgotPassword />,
    path: ROUTE.FORGOT_PASSWORD,
  },
  {
    element: (
      <ProtectedRoutes>
        <Dashboard />
      </ProtectedRoutes>
    ),
    path: ROUTE.DASHBOARD,
  },
  {
    element: (
      <ProtectedRoutes>
        <UserMgt />
      </ProtectedRoutes>
    ),
    path: ROUTE.USER_MGT,
  },
];
