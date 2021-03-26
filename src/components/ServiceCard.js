import React from "react";

function ServiceCard({ children, title, subtitle }) {
  return (
    <>
      <div className="flex space-x-4 text-white">
        <div>{children}</div>
        <div className="space-y-3">
          <div className="text-lg font-semibold">{title}</div>
          <div className="text-md font-normal w-72">{subtitle}</div>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
