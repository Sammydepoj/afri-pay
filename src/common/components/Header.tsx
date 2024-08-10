import { Popover } from "antd";
import Dropdown from "../../assets/icons/Dropdown";
// import Logo from "../../assets/logo.png";
import userImg from "../../assets/svg/user-img.svg";
import { useNavigate } from "react-router-dom";
import { ROUTE, retrieveUserInfoFromStorage } from "../../common/constants";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setAllGlobalKey } from "../../store";
const Header = () => {
  const navigate = useNavigate();
  const { userDetails } = retrieveUserInfoFromStorage();
  const state = useAppSelector((state) => {
    return state.global;
  });
  const dispatch = useAppDispatch();
  return (
    <div className="border-b border-b-[#D6EEDA] py-4 flex items-center justify-between px-16">
      <span className="flex  gap-3 items-center">
        {/* <img src={Logo} />{" "} */}
        <p className="bg-[#F1FFF3] text-[#374D41] font-[ibm-semibold] w-max p-1 rounded-lg">
          Dashboard
        </p>
      </span>
      <Popover
        trigger="hover"
        content={
          <div className="flex flex-col gap-4">
            {userDetails?.role === "SUPER_ADMIN" && (
              <button
                onClick={() => {
                  navigate(ROUTE.USER_MGT);
                }}
              >
                Manage Users
              </button>
            )}
            <button
              onClick={() => {
                dispatch(
                  setAllGlobalKey({
                    ...state,
                    showChangePasswordModal: !state.showChangePasswordModal,
                  })
                );
              }}
            >
              Change Password
            </button>
            <button
              onClick={() => {
                navigate(ROUTE.INDEX, { replace: true });
                sessionStorage.clear();
              }}
            >
              Log out
            </button>
          </div>
        }
        arrow={false}
      >
        <div className="flex items-center">
          <img src={userImg} />
          <Dropdown />
        </div>
      </Popover>
    </div>
  );
};

export default Header;
