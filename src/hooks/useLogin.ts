/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../store/index";
import { apiEndpoints } from "../store/apiEndpoints";
import { Encryption } from "../common/utils/encryption";
import { ROUTE } from "../common/constants";
import { notification } from "antd";

const useLogin = () => {
  const [login, handleLoginResponse] = useLoginMutation();
  const navigate = useNavigate();

  const handleGetUserInfo = async (token: string) => {
    try {
      const response = await fetch(
        import.meta.env.VITE_APP_BASE_URL + apiEndpoints.auth.getUserInfo,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const data = await response.json();

      if (data.responseCode !== "00") {
        notification.open({ message: "Something went wrong", type: "error" });
      } else {
        sessionStorage.setItem(
          import.meta.env.VITE_APP_USER_INFO,
          Encryption.encrypt(data?.data)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (payload: any) => {
    const response: any = await login({
      postUrl: apiEndpoints.auth.login,
      request: payload,
    });
    const apiResponse = response?.data;

    if (!apiResponse?.jwtToken) {
      notification.open({
        message: apiResponse?.failureReason ?? "Something went wrong!",
        type: "error",
      });
    } else {
      notification.open({
        message: "Login successful",
        type: "success",
      });
      sessionStorage.setItem(
        import.meta.env.VITE_APP_TOKEN,
        Encryption.encrypt(apiResponse?.jwtToken)
      );
      await handleGetUserInfo(apiResponse?.jwtToken);

      navigate(ROUTE.DASHBOARD);
    }
  };
  return { handleLogin, handleLoginResponse };
};

export default useLogin;
