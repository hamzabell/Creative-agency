import React from "react";

function ServiceCard({ icon, title, subtitle }) {
  return (
    <>
      <div className="flex space-x-4 text-white">
        <div>
          <img src={icon} alt="logo" />
        </div>
        <div className="space-y-3">
          <div className="text-lg font-semibold">{title}</div>
          <div className="text-md font-normal w-72">{subtitle}</div>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
