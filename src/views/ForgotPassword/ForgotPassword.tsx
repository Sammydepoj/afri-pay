import ForgotPasswordForm from "./ForgotPasswordForm";
import ChangePasswordForm from "./ChangePasswordForm";
import { useAppSelector } from "../../store/hooks";
// import Logo from "../../assets/logo.png";

const ForgotPassword = () => {
  const state = useAppSelector((state) => {
    return state.global;
  });
  const items = [
    { component: <ForgotPasswordForm /> },
    { component: <ChangePasswordForm /> },
  ];
  return <>{items[state.currentForgotPasswordStep].component}</>;
};

export default ForgotPassword;
