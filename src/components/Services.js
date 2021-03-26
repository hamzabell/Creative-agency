import React from "react";
import ServiceCard from "./ServiceCard";
import WebDesign from "../assets/web-design.png";
import AppTesting from "../assets/app.png";
import Brading from "../assets/branding.png";
import Graphics from "../assets/graphics.png";
import UI from "../assets/ui.png";
import Code from "../assets/web.png";

function Services() {
  return (
    <>
      <div className="py-20 bg-blue-600 px-96">
        <div className="mt-10">
          <h1 className="text-white text-6xl font-normal">services</h1>
          <h1 className="text-white text-6xl font-normal">&portfolio</h1>
          <div className="my-20 flex  space-x-32">
            <ServiceCard
              title="web Design"
              subtitle="modern web design services withnew trends and direction."
            >
              <img src={WebDesign} alt="web" />
            </ServiceCard>
            <ServiceCard
              title="Branding"
              subtitle="highly professional branding and logo design work."
            >
              <img src={Brading} alt="branding" />
            </ServiceCard>
            <ServiceCard
              title="Motion graphics"
              subtitle="modern motion graphics and animation for businesses. "
            >
              <img src={Graphics} alt="graphics" />
            </ServiceCard>
          </div>
          <div className="flex  space-x-32 mb-32">
            <ServiceCard
              icon={UI}
              title="ui/ux design"
              subtitle="Standard screen generation and design for all devices."
            >
              <img src={UI} alt="ui" />
            </ServiceCard>
            <ServiceCard
              title="Web Development"
              subtitle="website development is something we are best in. "
            >
              <img src={Code} alt="code" />
            </ServiceCard>
            <ServiceCard
              title="App testing"
              subtitle="we test app for better user experience and results."
            >
              <img src={AppTesting} alt="testing" />
            </ServiceCard>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
