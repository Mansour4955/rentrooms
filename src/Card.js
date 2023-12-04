import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardBanner from "./CardBanner";

const Card = () => {
  const filtter = useSelector((state) => state.filtter);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/api/cards?${
          filtter.country.includes("All") ? "" : filtter.country
        }&${filtter.category.includes("All") ? "" : filtter.category}&${filtter.minPrice}&${filtter.maxPrice}`
      )
      .then((res) => setCards(res.data))
      .catch((err) => console.log(err.message));
  }, [filtter.clickButton]); 
  async function deleteCard(e){
await axios.delete(`http://localhost:5000/api/cards/${e}`)
  }
  return (
    <div className="w-10/12 mx-auto flex flex-col items-center gap-11 mb-10">
      <h3 className="text-buttonColor font-semibold text-2xl">
        Many categories for <span>rent</span>
      </h3>
      <div className="grid grid-cols-4 w-full gap-3">
        {cards.map((card) => (
          <div
            className="p-2 bg-white shadow-shadowOne rounded-xl"
            key={card._id}>
            <div>
              <div className="flex justify-between px-1 text-buttonColor text-sm items-center">
                <p>{card.country}</p>
                <p>{card.category}</p>
              </div>
              {
                <CardBanner photo={card.image} />
              }
            </div>
            <div className="flex justify-between px-1 mt-1">
              <p className="font-titleFont font-semibold">{card.title}</p>
              <p className="font-medium">
                {card.price}$
                <span className="text-xs text-buttonColor">Per day</span>
              </p>
            </div>
            <p className="px-1 text-sm mt-1 text-gray-400">{card.desc}</p>
            <div className="flex justify-between items-center mx-2 mt-1">
              <button onClick={()=> deleteCard(card._id)} className="bg-red-500 rounded-lg px-2 text-white font-medium">Delete</button>
              <button className="bg-green-600 rounded-lg px-2 text-white font-medium">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
