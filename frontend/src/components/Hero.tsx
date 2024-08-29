import { useEffect, useState } from "react";
import Search from "./Search";
import Card from "./Card";

export interface CardItem {
  _id: string;
  title: string;
  description: string;
}

const Hero: React.FC = () => {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/cards")
      .then((res) => res.json())
      .then((data) => setCards(data.cards))
      .catch((error) => {
        console.log("Error occurred while fetching cards:", error);
      });
  }, []);

  return (
    <>
      <Search />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-20 gap-y-20 p-20 place-items-center">
        {cards.map((item: CardItem) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Hero;
