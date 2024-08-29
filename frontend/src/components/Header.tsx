import Logo from "../assets/logo.png";
const Header: React.FC = () => {
  return (
    <div className="bg-black border-t rounded-t-2xl text-[#e7e8e7] flex items-center justify-between px-12 py-4 gap-2">
      <div className="flex items-center gap-2">
        <span>
          <img src={Logo} alt="logo" className="w-8 h-8" />
        </span>
        <span className="text-lg text-[#eaeaea] font-semibold">Abstract</span>
        <span className="font-semibold">|</span>
        <span>Help Center</span>
      </div>

      <div>
        <button className="border-2 border-[#585858] rounded-md px-3 py-2 hover:font-medium">
          Submit a request
        </button>
      </div>
    </div>
  );
};

export default Header;
