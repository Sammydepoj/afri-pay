import { Button, Form, Input } from "antd";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import useChangePassword from "../../hooks/useResetPassword";
import useSendOtpForOtForPasswordChange from "../../hooks/useRequestOtp";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../common/constants";
import { setAllGlobalKey } from "../../store";
// import Logo from "../../assets/logo.png";

const ChangePasswordForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const state = useAppSelector((state) => {
    return state.global;
  });
  const { handleChangePassword, handleChangePasswordResult } =
    useChangePassword();
  const {
    handleSendOtpForPasswordChange,
    handleSendOtpForPasswordChangeResult,
  } = useSendOtpForOtForPasswordChange();
  return (
    <section className="relative min-h-[100svh] p-8 flex flex-col items-center justify-center">
      {/* <img src={Logo} className="absolute top-6 left-8" /> */}
      <div className="max-w-[521px] w-full p-8 shadow-lg rounded-3xl">
        {/* <img src={Logo} className="mx-auto" /> */}
        <button
          onClick={() => {
            navigate(ROUTE.INDEX);
            dispatch(
              setAllGlobalKey({ ...state, currentForgotPasswordStep: 0 })
            );
          }}
        >
          Back to Login
        </button>
        <h3 className="text-[#151414] text-4xl text-center mt-4 mb-3 font-[ibm-bold]">
          Change Password
        </h3>
        <p className="text-[#151414] text-base text-center mb-8">
          An OTP has been sent to your email to change password
        </p>
        <Form
          layout="vertical"
          wrapperCol={{ span: 24 }}
          labelCol={{ span: 24 }}
          requiredMark="optional"
          onFinish={(e) => {
            handleChangePassword({
              email: state.userEmail as string,
              otp: e?.otp as number,
              changePasswordRequestDTO: {
                confirmPassword: e?.confirmPassword,
                oldPassword: e?.password,
              },
            });
          }}
        >
          <Form.Item
            name={"otp"}
            label={
              <span className="text-[#151414] font-[ibm-medium] text-sm">
                OTP
              </span>
            }
            rules={[
              { required: true, message: "OTP is required" },
              { max: 4, message: "Only 4 digit numbers are required" },
            ]}
          >
            <Input.Password placeholder="Enter your OTP" type="password" />
          </Form.Item>
          <span className="flex justify-end items-center -mt-2   text-sm">
            Didn't get OTP? &nbsp;
            <button
              type="button"
              className="text-[#151414] font-[ibm-medium]"
              onClick={() => {
                handleSendOtpForPasswordChange(state.userEmail as string);
              }}
            >
              {handleSendOtpForPasswordChangeResult.isLoading
                ? "Resending ..."
                : " Click to resend"}
            </button>
          </span>
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
            loading={
              handleChangePasswordResult.isLoading ||
              handleSendOtpForPasswordChangeResult.isLoading
            }
          >
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default ChangePasswordForm;
