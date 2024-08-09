/* eslint-disable @typescript-eslint/no-explicit-any */
import { notification } from "antd";
import { setAllGlobalKey, usePostDataMutation } from "../store";
import { apiEndpoints } from "../store/apiEndpoints";
import { RESPONSE_CODE } from "../common/constants";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export type ChangePasswordRequestType = {
  otp: number;
  email: string;
  changePasswordRequestDTO: {
    oldPassword: string;
    password: string;
    confirmPassword: string;
  };
};
const useChangePassword = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => {
    return state.global;
  });
  const [resetPassword, handleChangePasswordResult] = usePostDataMutation();

  const handleChangePassword = async (payload: ChangePasswordRequestType) => {
    const response: any = await resetPassword({
      postUrl: `${apiEndpoints.auth.changePassword}`,
      request: payload,
    });
    const apiResponse = response?.data ?? response?.error?.data;
    console.log(apiResponse);
    if (apiResponse?.responseCode !== RESPONSE_CODE.successful) {
      notification.open({
        message: apiResponse?.failureReason ?? "Something went wrong!",
        type: "error",
      });
    } else {
      notification.open({
        message: apiResponse?.data,
        type: "success",
      });
      dispatch(setAllGlobalKey({ ...state, currentForgotPasswordStep: 1 }));
    }
  };

  return {
    handleChangePassword,
    handleChangePasswordResult,
  };
};

export default useChangePassword;
