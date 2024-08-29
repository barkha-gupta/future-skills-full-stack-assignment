import { CardItem } from "./Hero";

interface CardProps {
  item: CardItem;
}
const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="border bg-[#f4f6f8] flex flex-col text-[#3c4349] rounded-md w-3/4 shadow-sm">
      <div className="font-semibold border-b border-b-slate-300 px-4 py-2">
        {item.title}
      </div>
      <div className="px-4 pt-2 pb-4">{item.description}</div>
    </div>
  );
};

export default Card;
