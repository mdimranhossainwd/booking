import { useEffect, useState } from "react";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    fetch("https://assainment-server.vercel.app/features")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  console.log(items);

  return (
    <div className="container mx-auto">
      <div className="text-center pt-16 mb-8">
        <h2 className="mb-5 text-4xl text-center text-black font-bold">
          Our <span className="text-[#FF3364]">Features</span>
        </h2>
        <p className="md:w-[770px] text-md md:px-0 px-3 mx-auto">
          Our online studies platform offers a rich array of features designed
          to enhance your learning experience. From a diverse selection of
          courses taught by experts in their respective fields to interactive
          quizzes and assignments that reinforce your knowledge,
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-0 lg:grid-cols-3 gap-8">
        {items?.map((card) => (
          <FeaturesCard card={card} key={card._id}></FeaturesCard>
        ))}
      </div>
    </div>
  );
};

export default Features;
