import React from "react";
import ServiceCard from "./ServiceCard";
import { WebDesign, Brading, UI, Code, Graphics, AppTesting } from "../assets";

function Services() {
  return (
    <>
      <div className="py-20 bg-blue-600 px-96">
        <div className="mt-10">
          <h1 className="text-white text-6xl font-normal">services</h1>
          <h1 className="text-white text-6xl font-normal">&portfolio</h1>
          <div className="my-20 flex  space-x-32">
            <ServiceCard
              icon={WebDesign}
              title="web Design"
              subtitle="modern web design services withnew trends and direction."
            />
            <ServiceCard
              icon={Brading}
              title="Branding"
              subtitle="highly professional branding and logo design work."
            />
            <ServiceCard
              icon={Graphics}
              title="Motion graphics"
              subtitle="modern motion graphics and animation for businesses. "
            />
          </div>
          <div className="flex  space-x-32 mb-32">
            <ServiceCard
              icon={UI}
              title="ui/ux design"
              subtitle="Standard screen generation and design for all devices."
            />
            <ServiceCard
              icon={Code}
              title="Web Development"
              subtitle="website development is something we are best in. "
            />
            <ServiceCard
              icon={AppTesting}
              title="App testing"
              subtitle="we test app for better user experience and results."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
