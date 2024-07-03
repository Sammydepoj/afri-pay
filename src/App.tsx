import LazyLoader from "./common/components/LazyLoader";
import { ConfigProvider } from "antd";
import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { routes } from "./utils/routes";
import { getThemeConfig } from "./utils/theme.config";

function App() {
  const router = createBrowserRouter(routes);

  return (
    <ConfigProvider theme={getThemeConfig()}>
      <Suspense fallback={<LazyLoader />}>
        <RouterProvider router={router} />
      </Suspense>
      <ToastContainer />
    </ConfigProvider>
  );
}

export default App;
