/* eslint-disable @typescript-eslint/no-explicit-any */
import { notification } from "antd";
import { setAllGlobalKey, usePostDataMutation } from "../store";
import { apiEndpoints } from "../store/apiEndpoints";
import { RESPONSE_CODE, ROUTE } from "../common/constants";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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
        message: apiResponse?.status + " Please login with the new details",
        type: "success",
      });
      sessionStorage.clear();
      navigate(ROUTE.INDEX, { replace: true });
      dispatch(setAllGlobalKey({ ...state, showChangePasswordModal: false }));
    }
  };

  return {
    handleChangeUserPassword,
    handleChangeUserPasswordResult,
  };
};

export default useChangeUserPassword;
