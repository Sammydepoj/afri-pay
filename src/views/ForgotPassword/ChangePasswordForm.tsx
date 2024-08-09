import { Button, Form, Input } from "antd";
import { useAppSelector } from "../../store/hooks";
// import Logo from "../../assets/logo.png";

const ChangePasswordForm = () => {
  const state = useAppSelector((state) => {
    return state.global;
  });
  return (
    <section className="relative min-h-[100svh] p-8 flex flex-col items-center justify-center">
      {/* <img src={Logo} className="absolute top-6 left-8" /> */}
      <div className="max-w-[521px] w-full p-8 shadow-lg rounded-3xl">
        {/* <img src={Logo} className="mx-auto" /> */}
        <h3 className="text-[#151414] text-4xl text-center mt-16 mb-3 font-[ibm-bold]">
          Change Password
        </h3>
        <p className="text-[#151414] text-base text-center mb-8">
          Fill in the details to change password
        </p>
        <Form
          layout="vertical"
          wrapperCol={{ span: 24 }}
          labelCol={{ span: 24 }}
          className="grid gap-4 "
          requiredMark="optional"
          onFinish={(e) => {
            console.log({
              otp: e?.otp,
              email: state.userEmail,
              oldPassword: e?.password,
              confirmPassword: e?.confirmPassword,
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
            rules={[{ required: true, message: "OTP is required" }]}
          >
            <Input.Password placeholder="Enter your OTP" type="password" />
          </Form.Item>
          <Form.Item
            name={"password"}
            label={
              <span className="text-[#151414] font-[ibm-medium] text-sm">
                New password
              </span>
            }
            rules={[{ required: true, message: "New Password is required" }]}
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
          >
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default ChangePasswordForm;
