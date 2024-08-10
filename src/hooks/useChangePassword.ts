/* eslint-disable @typescript-eslint/no-explicit-any */
import { notification } from "antd";
import { setAllGlobalKey, usePostDataMutation } from "../store";
import { apiEndpoints } from "../store/apiEndpoints";
import { RESPONSE_CODE } from "../common/constants";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export type ChangeUserPasswordRequestType = {
  password: string;
  oldPassword: string;
  confirmPassword: string;
};
const useChangeUserPassword = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => {
    return state.global;
  });
  const [changePassword, handleChangeUserPasswordResult] =
    usePostDataMutation();

  const handleChangeUserPassword = async (
    payload: ChangeUserPasswordRequestType
  ) => {
    const response: any = await changePassword({
      postUrl: `${apiEndpoints.dashboard.changePassword}`,
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
      dispatch(setAllGlobalKey({ ...state, showChangePasswordModal: false }));
    }
  };

  return {
    handleChangeUserPassword,
    handleChangeUserPasswordResult,
  };
};

export default useChangeUserPassword;
