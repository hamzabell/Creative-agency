import React from "react";
import {
  FaRegCopyright,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { BiBasketball } from "react-icons/bi";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background: #f8fafd;
`;

export default function Footer() {
  return (
    <>
      <StyledFooter className="">
        <div className="flex flex-col justify-center mx-40 py-10 ">
          <div className="w-full h-1 bg-blue-100 my-20"></div>

          <div className="grid grid-cols-4 gap-20 ml-6">
            <div className="flex flex-col  space-y-6">
              <div className="flex space-x-2">
                <h4 className="text-2xl font-semibold text-blue-800">agency</h4>
                <div className="w-6 h-6 rounded-full bg-blue-800 text-white text-center font-semibold">
                  x
                </div>
              </div>

              <p className="text-left w-72 text-blue-600">
                A design agency shaping ideas into products. We help startups
                and enterprises invent, build and launch their next project.
              </p>
            </div>
            <div className="flex flex-col  space-y-6">
              <h4 className="text-2xl font-semibold text-blue-800">Services</h4>
              <ul className="text-left w-96 text-blue-600 space-y-4 cursor-pointer">
                <li>Web Design</li>
                <li>App Design</li>
                <li>Photography</li>
                <li>Videography</li>
              </ul>
            </div>
            <div className="flex flex-col  space-y-6">
              <h4 className="text-2xl font-semibold text-blue-800">Support</h4>
              <ul className="text-left w-96 text-blue-600 space-y-2 cursor-pointer">
                <li>Get Support</li>
                <li>Contact</li>
                <li>My Blog</li>
                <li>Privacy Policy</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div className="flex flex-col  space-y-6">
              <h4 className="text-2xl font-semibold text-blue-800">social</h4>

              <div className="space-x-8 text-blue-600 flex">
                <FaFacebookF className="w-7 h-7 cursor-pointer" />
                <FaTwitter className="w-7 h-7 cursor-pointer" />
                <BiBasketball className="w-7 h-7 cursor-pointer" />
                <FaLinkedinIn className="w-7 h-7 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="w-full h-1 bg-blue-200 mt-32 mb-6"></div>
          <div className="flex justify-center text-md text-blue-600 mt-2">
            <FaRegCopyright className=" mx-3" />
            frontendtest | All rights reserved 2020
          </div>
        </div>
      </StyledFooter>
    </>
  );
}
