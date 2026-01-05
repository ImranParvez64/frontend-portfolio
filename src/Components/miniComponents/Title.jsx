import React from "react";

const Title = ({title}) => {
  return (
    <div>
      {/* Title */}
      <div className="mb-12 sm:mb-16 text-center sm:text-left">
        <div className="relative inline-block">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            {title}
          </h2>
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-transparent rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default Title;
