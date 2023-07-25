import React from "react";
import { Link } from "react-router-dom";

const Head = ({ heading, paragraph, linkName, linkUrl = "#" }:any) => {
  return (
    <div className="mb-3">
      <div className="flex justify-center">
        <img
          alt=""
          className="h-14 w-14"
          src="/icons/login.png"
        />
      </div>
      <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        {paragraph}{" "}
        <Link
          to={linkUrl}
          className="font-medium text-blue-600 hover:text-blue-500"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
};

export default Head;
