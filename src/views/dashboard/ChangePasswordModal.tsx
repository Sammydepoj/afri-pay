import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { PageModal } from "../../common/components/modal";
import { setAllGlobalKey } from "../../store";
import { Button, Form, Input, notification } from "antd";
import useChangeUserPassword from "../../hooks/useChangePassword";

const ChangePasswordModal = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => {
    return state.global;
  });
  const { handleChangeUserPassword, handleChangeUserPasswordResult } =
    useChangeUserPassword();
  return (
    <PageModal
      openModal={state.showChangePasswordModal}
      handleCancel={() => {
        dispatch(setAllGlobalKey({ ...state, showChangePasswordModal: false }));
      }}
      modalFooter={null}
      centered
      closable
      modalWith="400px"
    >
      <h3 className="text-[#151414] text-4xl text-center  mb-3 font-[ibm-bold]">
        Change Password
      </h3>

      <Form
        layout="vertical"
        wrapperCol={{ span: 24 }}
        labelCol={{ span: 24 }}
        requiredMark="optional"
        onFinish={(e) => {
          if (
            e?.oldPassword === e?.password ||
            e?.oldPassword === e?.confirmPassword
          ) {
            notification.open({
              message: "Old password can not be the same with new password",
              type: "error",
            });
            return;
          }
          handleChangeUserPassword({
            password: e?.password,
            confirmPassword: e?.confirmPassword,
            oldPassword: e?.oldPassword,
          });
        }}
      >
        <Form.Item
          name={"oldPassword"}
          label={
            <span className="text-[#151414] font-[ibm-medium] text-sm">
              Old password
            </span>
          }
          rules={[
            {
              required: true,
              message: "Old Password is required",
            },
          ]}
        >
          <Input.Password placeholder="Old Password" />
        </Form.Item>
        <Form.Item
          name={"password"}
          label={
            <span className="text-[#151414] font-[ibm-medium] text-sm">
              New password
            </span>
          }
          rules={[
            {
              required: true,
              message: "Password is required",
            },
            {
              min: 8,
              message: "Password must have a minimum length of 8",
            },
            {
              pattern: new RegExp(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/
              ),
              message:
                "Password must contain at least one lowercase letter, uppercase letter, number, and special character",
            },
          ]}
        >
          <Input.Password placeholder="New Password" />
        </Form.Item>
        <Form.Item
          name={"confirmPassword"}
          label={
            <span className="text-[#151414] font-[ibm-medium] text-sm">
              Confirm password
            </span>
          }
          rules={[
            { required: true, message: "Confirm Password is password " },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm password" />
        </Form.Item>
        <Button
          htmlType="submit"
          className="bg-[#374D41] hover:!bg-[#374D41] !text-white py-6 font-[ibm-medium] "
          loading={handleChangeUserPasswordResult.isLoading}
        >
          Submit
        </Button>
      </Form>
    </PageModal>
  );
};

export default ChangePasswordModal;
