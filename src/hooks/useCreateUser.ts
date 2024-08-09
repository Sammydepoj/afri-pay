/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setAllGlobalKey, usePostDataMutation } from "../store";
import { apiEndpoints } from "../store/apiEndpoints";
import { notification } from "antd";
import { RESPONSE_CODE } from "../common/constants";

export interface ApiResponse {
  status: string;
  responseCode: string;
  failureReason: string;
  data: any;
}

const useCreateUser = () => {
  const [createUser, handleCreateUserResult] = usePostDataMutation();
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => {
    return state.global;
  });

  const handleCreateUser = async (payload: any) => {
    const response: any = await createUser({
      postUrl: apiEndpoints.dashboard.addUser,
      request: payload,
    });

    const apiResponse = response?.data ?? response?.data?.token;

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
      dispatch(setAllGlobalKey({ ...state, showAddUserModal: false }));
    }
  };
  return { handleCreateUser, handleCreateUserResult };
};

export default useCreateUser;
