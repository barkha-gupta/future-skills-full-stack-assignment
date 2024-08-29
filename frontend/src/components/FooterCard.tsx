interface FooterCardProps {
  title: string;
  data: string[];
}
const FooterCard: React.FC<FooterCardProps> = ({ title, data }) => {
  return (
    <div>
      <div className="text-[#eaeaea] font-semibold text-base pb-4">{title}</div>
      {data.map((content) => (
        <div className="text-xs pb-1">{content}</div>
      ))}
    </div>
  );
};

export default FooterCard;
