import { Button, Form, Input } from "antd";
import useSendOtpForOtForPasswordChange from "../../hooks/useRequestOtp";

const ForgotPasswordForm = () => {
  const {
    handleSendOtpForPasswordChangeResult,
    handleSendOtpForPasswordChange,
  } = useSendOtpForOtForPasswordChange();
  return (
    <section className="relative min-h-[100svh] p-8 flex flex-col items-center justify-center">
      {/* <img src={Logo} className="absolute top-6 left-8" /> */}
      <div className="max-w-[521px] w-full p-8 shadow-lg rounded-3xl">
        {/* <img src={Logo} className="mx-auto" /> */}
        <h3 className="text-[#151414] text-4xl text-center mt-16 mb-3 font-[ibm-bold]">
          Forgot Password
        </h3>
        <p className="text-[#151414] text-base text-center mb-8">
          Enter your email to change password
        </p>
        <Form
          layout="vertical"
          wrapperCol={{ span: 24 }}
          labelCol={{ span: 24 }}
          className="grid gap-7 "
          requiredMark="optional"
          onFinish={(e) => {
            handleSendOtpForPasswordChange(e?.email);
          }}
        >
          <Form.Item
            name={"email"}
            label={
              <span className="text-[#151414] font-[ibm-medium] text-sm">
                Email
              </span>
            }
            rules={[
              { required: true, message: "Email address is required" },
              { type: "email", message: "Invalid Email Address" },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Button
            htmlType="submit"
            className="bg-[#374D41] hover:!bg-[#374D41] !text-white py-6 font-[ibm-medium] "
            loading={handleSendOtpForPasswordChangeResult.isLoading}
          >
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default ForgotPasswordForm;
