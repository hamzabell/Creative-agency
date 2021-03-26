import React from "react";
import styled from "styled-components";
import {
  FaRegCopyright,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { BiBasketball } from "react-icons/bi";

const StyledDiv = styled.div`
  background: ${(props) => props.bg || "#ffc5b8"};
  height: 428px;
  width: 326px;
`;

function TeamCard({ children, bgColor, staffName }) {
  return (
    <div className="flex flex-col ">
      <StyledDiv class="relative shadow-2xl" bg={bgColor}>
        {children}
      </StyledDiv>
      <div className="flex justify-center">
        <div className="flex flex-col  mt-4 text-center text-blue-700">
          <h3 className="font-semibold text-xl">{staffName}</h3>
          <p className="text-gray-400 text-center w-64 mt-2">
            Standard screen generation and design for all
          </p>
          <div className="space-x-6 text-gray-400 flex justify-center mt-4">
            <FaFacebookF className="w-6 h-6 cursor-pointer" />
            <FaTwitter className="w-6 h-6 cursor-pointer" />
            <BiBasketball className="w-6 h-6 cursor-pointer" />
            <FaLinkedinIn className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
