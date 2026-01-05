import React from "react";

const Stat = ({ number, title }) => (
  <div
    className="bg-[#0b1220] rounded-lg p-5 text-center
               border border-gray-700"
  >
    <h3 className="text-3xl font-semibold text-white mb-1">{number}</h3>
    <p className="text-sm text-gray-400 leading-snug">{title}</p>
  </div>
);

export default Stat;
