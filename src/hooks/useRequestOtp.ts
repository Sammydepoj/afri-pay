/* eslint-disable @typescript-eslint/no-explicit-any */
import { notification } from "antd";
import { setAllGlobalKey, usePostDataMutation } from "../store";
import { apiEndpoints } from "../store/apiEndpoints";
import { RESPONSE_CODE } from "../common/constants";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const useSendOtpForOtForPasswordChange = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => {
    return state.global;
  });
  const [resetPassword, handleSendOtpForPasswordChangeResult] =
    usePostDataMutation();

  const handleSendOtpForPasswordChange = async (email: string) => {
    const response: any = await resetPassword({
      postUrl: `${apiEndpoints.auth.requestOtpForPasswordChange}${email}`,
    });
    const apiResponse = response?.data ?? response?.error?.data;

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
      dispatch(
        setAllGlobalKey({
          ...state,
          currentForgotPasswordStep: 1,
          userEmail: email,
        })
      );
    }
  };

  return {
    handleSendOtpForPasswordChange,
    handleSendOtpForPasswordChangeResult,
  };
};

export default useSendOtpForOtForPasswordChange;
