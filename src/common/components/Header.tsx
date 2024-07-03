import Logo from "../../assets/logo.png";
import userImg from "../../assets/svg/user-img.svg";
const Header = () => {
  return (
    <div className="border-b border-b-[#D6EEDA] py-4 flex items-center justify-between px-16">
      <span className="flex  gap-3 items-center">
        <img src={Logo} />{" "}
        <p className="bg-[#F1FFF3] text-[#374D41] font-[ibm-semibold] w-max p-1 rounded-lg">
          Dashboard
        </p>
      </span>
      <img src={userImg} />
    </div>
  );
};

export default Header;
