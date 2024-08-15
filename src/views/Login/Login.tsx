import { Button, Form, Input } from "antd";
import Logo from "../../assets/logo.png";
import useLogin from "../../hooks/useLogin";
import { Link } from "react-router-dom";
import { ROUTE } from "../../common/constants";

const Login = () => {
  const { handleLogin, handleLoginResponse, loading } = useLogin();
  return (
    <section className="relative min-h-[100svh] p-8 flex flex-col items-center justify-center">
      {/* <img src={Logo} className="absolute top-6 left-8" /> */}
      <div className="max-w-[521px] w-full p-8 shadow-lg rounded-3xl">
        <img src={Logo} className="mx-auto" />
        <h3 className="text-[#151414] text-4xl text-center mt-6 mb-3 font-[ibm-bold]">
          Log in
        </h3>
        <p className="text-[#151414] text-base text-center mb-8">
          Welcome back! Please enter your details.
        </p>
        <Form
          layout="vertical"
          wrapperCol={{ span: 24 }}
          labelCol={{ span: 24 }}
          className="grid gap-7 "
          requiredMark="optional"
          onFinish={(e) => {
            handleLogin(e);
          }}
        >
          <Form.Item
            name={"username"}
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
          <Form.Item
            name={"password"}
            rules={[{ required: true, message: "Password is required" }]}
            label={
              <span className="text-[#151414] font-[ibm-medium] text-sm">
                Password
              </span>
            }
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          <button className="-mt-[3rem] flex justify-end">
            <Link to={ROUTE.FORGOT_PASSWORD}>Forgot Password?</Link>
          </button>
          <Button
            htmlType="submit"
            className="bg-[#374D41] hover:!bg-[#374D41] !text-white py-6 font-[ibm-medium] "
            loading={handleLoginResponse.isLoading || loading}
          >
            Log in
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default Login;
