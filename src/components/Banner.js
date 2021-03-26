import React from "react";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { Man } from "../assets";

const StyledDiv = styled.div`
  color: #502eff;
  opacity: 0.0392156862745098;
`;
function Banner() {
  return (
    <div className="inline-flex py-80 px-12">
      <StyledDiv className="text-blue-100 transform -rotate-90 text-9xl -ml-32">
        creative
      </StyledDiv>

      <div className="flex justify-between absolute top-0 mt-20 ml-52 w-10/12 z-50">
        <div className="flex space-x-2">
          <h4 className="text-2xl font-semibold text-blue-800">agency</h4>
          <div className="w-6 h-6 rounded-full bg-blue-800 text-white text-center font-semibold">
            x
          </div>
        </div>

        <div className="flex text-blue-800">
          <ul className="flex space-x-14">
            <li>Home</li>
            <li>Services</li>
            <li>Project</li>
            <li>about us</li>
            <li>contact</li>
            <li>
              <button className="rounded-3xl text-white bg-blue-800 w-32 h-10 ml-10">
                my pROJECT
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="-ml-28  -mt-14 flex flex-col space-y-8">
          <div className="text-blue-700 tracking-wider">
            <h1 className="text-8xl">creative</h1>
            <h3 className="text-7xl">agency</h3>
          </div>
          <div className="flex space-x-4">
            <div className="w-20 h-20 bg-blue-700 rounded-full flex justify-center items-center">
              <FaPlay className="text-white w-8 h-8" />
            </div>
            <h5 className="mt-6 font-semibold text-lg">watch a video intro</h5>
          </div>
        </div>

        <div className="absolute top-0 right-0">
          <img src={Man} alt="man" width={650} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
