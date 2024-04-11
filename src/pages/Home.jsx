import React from "react";
import { GoPlay } from "react-icons/go";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="mt-[-80px] flex flex-col items-center  justify-center space-y-5 bg-gray-700 p-5 text-2xl text-white">
        <h1 className="border-2 border-white p-4">Get our Latest Album</h1>
        <button className="text-6xl">
          <GoPlay />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center space-y-4">
        <h1 className="text-2xl font-serif tracking-tight font-semibold pt-3 ">TOURS</h1>
        <div className="ticket">
          <h2 className="text-black">JUL16</h2>
          <h2 className="ml-10">DETROIT, MI</h2>
          <h2>DTE ENERGY MUSIC THEATRE</h2>
          <button className="btn">BUY TICKETS</button>
        </div>
        <div className="ticket">
          <h2 className="text-black">JUL19</h2>
          <h2>TORONTO,ON</h2>
          <h2>BUDWEISER STAGE</h2>
          <button className="btn">BUY TICKETS</button>
        </div>
        <div className="ticket">
          <h2 className="text-black">JUL 22</h2>
          <h2>BRISTOW, VA</h2>
          <h2>JIGGY LUBE LIVE</h2>
          <button className="btn">BUY TICKETS</button>
        </div>
        <div className="ticket">
          <h2 className="text-black">JUL 29</h2>
          <h2>PHOENIX, AZ</h2>
          <h2>AK-CHIN PAVILION</h2>
          <button className="btn">BUY TICKETS</button>
        </div>
        <div className="ticket">
          <h2 className="text-black">AUG 2</h2>
          <h2>LAS VEGAS, NV</h2>
          <h2>T-MOBILE ARENA</h2>
          <button className="btn">BUY TICKETS</button>
        </div>
        <div className="ticket">
          <h2 className="text-black">AUG 7</h2>
          <h2>CONCORD, CA</h2>
          <h2>CONCORD PAVILION</h2>
          <button className="btn">BUY TICKETS</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
