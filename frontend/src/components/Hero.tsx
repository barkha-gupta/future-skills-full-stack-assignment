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

  const handleSearch = (term: string) => {
    setSearchTerm(term.toLowerCase());
  };
  const filteredCards = cards.filter((card: CardItem) =>
    card.title.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <Search onSearch={handleSearch} />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-20 gap-y-20 p-20 place-items-center">
        {filteredCards.map((item: CardItem) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Hero;
