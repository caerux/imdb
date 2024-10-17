"use client";

import React from "react";
import { LuLoader2 } from "react-icons/lu";

const LoaderOverlay = () => {
  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-50 z-50"
      role="status"
    >
      <LuLoader2 className="animate-spin h-16 w-16 text-blue-500 dark:text-blue-400" />
    </div>
  );
};

export default LoaderOverlay;
