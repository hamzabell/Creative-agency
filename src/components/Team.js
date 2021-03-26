import React from "react";
import TeamCard from "./TeamCard";
import { ManOne, ManTwo, WomanOne } from "../assets";

function Team() {
  return (
    <>
      <div className="my-20 flex flex-col">
        <div className="flex flex-col">
          <h3 className="text-gray-200 font-semibold text-xl text-center">
            Meet The Team
          </h3>
          <p className="text-center text-4xl text-blue-800 mt-4">
            great outcome always relay on
          </p>
          <p className="text-center text-4xl text-blue-800 ">
            the great foundation
          </p>
        </div>
        <div className="py-24 flex justify-center space-x-20">
          <TeamCard staffName="jam potrick">
            <img
              src={ManOne}
              alt="member"
              className="absolute ml-20 mt-20"
              width={255}
            />
          </TeamCard>
          <TeamCard bgColor="#FF5630" staffName="ema jonas">
            <img
              src={WomanOne}
              alt="member"
              className="absolute ml-16 mt-20"
              width={210}
            />
          </TeamCard>
          <TeamCard bgColor="#3E4863" staffName="mike pens">
            <img
              src={ManTwo}
              alt="member"
              className="absolute ml-0 mt-24"
              width={326}
            />
          </TeamCard>
        </div>
        <div className="flex justify-center my-10">
          <button className="text-white bg-blue-600 w-64 h-14 rounded-3xl">
            Let's catch all
          </button>
        </div>
      </div>
    </>
  );
}

export default Team;
