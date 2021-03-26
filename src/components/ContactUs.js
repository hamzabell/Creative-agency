import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  ::placeholder {
    color: #502eff;
  }
  input {
    outline: none;
  }
  input::placeholder {
    color: #502eff;
  }
`;
function ContactUs() {
  return (
    <StyledDiv className="flex flex-col items-center w-full mb-44 mt-32">
      <h5 className="text-blue-300 text-xl mb-2">contact us</h5>
      <h2 className=" text-blue-700 text-3xl font-semibold">
        Have an awesome idea in your mind?
      </h2>
      <h3 className="text-center text-blue-700 text-3xl font-semibold">
        we would love to hear
      </h3>
      <div className="my-10 space-x-4">
        <input
          type="text"
          placeholder="enter your email"
          className="border-4 border-blue-700 rounded-3xl h-12 w-72 pl-3"
        />
        <button
          type="button"
          className="bg-blue-700 text-white rounded-3xl h-12 w-32 font-semibold"
        >
          start
        </button>
      </div>
    </StyledDiv>
  );
}

export default ContactUs;
