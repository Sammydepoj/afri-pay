/* eslint-disable @typescript-eslint/no-explicit-any */
import { notification } from "antd";
import { setAllGlobalKey, usePostDataMutation } from "../store";
import { apiEndpoints } from "../store/apiEndpoints";
import { RESPONSE_CODE, ROUTE } from "../common/constants";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom";

export type ChangePasswordRequestType = {
  otp: number;
  email: string;
  changePasswordRequestDTO: {
    oldPassword: string;
    confirmPassword: string;
  };
};
const useChangePassword = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const state = useAppSelector((state) => {
    return state.global;
  });
  const [resetPassword, handleChangePasswordResult] = usePostDataMutation();

  const handleChangePassword = async (payload: ChangePasswordRequestType) => {
    const response: any = await resetPassword({
      postUrl: `${apiEndpoints.auth.resetPassword}`,
      request: payload,
    });
    const apiResponse = response?.data ?? response?.error?.data;

    if (apiResponse?.responseCode !== RESPONSE_CODE.successful) {
      notification.open({
        message: apiResponse?.failureReason ?? "Something went wrong!",
        type: "error",
      });
    } else {
      notification.open({
        message: apiResponse?.status,
        type: "success",
      });
      dispatch(setAllGlobalKey({ ...state, currentForgotPasswordStep: 0 }));
      navigate(ROUTE.INDEX);
    }
  };

  return {
    handleChangePassword,
    handleChangePasswordResult,
  };
};

export default useChangePassword;
