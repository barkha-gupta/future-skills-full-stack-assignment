import FooterCard from "./FooterCard";
import Logo from "../assets/logo.png";
const AbstractRow = ["Branches"];

const ResourcesRow = ["Blog", "Help Center", "Release Notes", "Status"];

const CommunityRow = ["Twitter", "LinkedIn", "Facebook", "Dribble", "Podcast"];

const CompanyRow = ["About Us", "Careers", "Legal"];
const Footer: React.FC = () => {
  return (
    <div className="bg-black text-[#e7e8e7] flex justify-evenly py-8 rounded-b-2xl">
      <FooterCard title="Abstract" data={AbstractRow} />
      <FooterCard title="Resources" data={ResourcesRow} />
      <FooterCard title="Community" data={CommunityRow} />
      <div className="flex flex-col">
        <FooterCard title="Company" data={CompanyRow} />
        <div className="flex flex-col pt-4">
          <div className="font-medium text-sm">Contact Us</div>
          <div className="text-xs">info@abstarct.com</div>
        </div>
      </div>
      <div className="flex flex-col text-xs gap-1 items-baseline pt-32">
        <img src={Logo} alt="logo" className="w-6 h-6" />
        <div>© Copyright 2022</div>
        <div>Abstract Studio Design, Inc.</div>
        <div>All rights reserved</div>
      </div>
    </div>
  );
};

export default Footer;
