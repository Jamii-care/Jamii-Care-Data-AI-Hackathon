import React from "react";
import HeroImg from "../assets/FinanceFlow.jpg";

const Home = () => {
  return (
    <div
      className="bg-cover bg-center h-screen w-full flex items-center justify-center"
      style={{ backgroundImage: `url(${HeroImg})`, opacity:`90%`, height:`91vh`}}
    >
      <p className="text-white text-center text-2xl">Welcome to Jamii Care</p>
    </div>
  );
};

export default Home;
