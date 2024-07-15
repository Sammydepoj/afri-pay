import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  if (
    !sessionStorage.getItem(import.meta.env.VITE_APP_USER_INFO) &&
    !sessionStorage.getItem(import.meta.env.VITE_APP_TOKEN)
  ) {
    return <Navigate to={"/"} replace />;
  }
  return children;
};
