"use client";

import React from "react";
import { LuLoader2 } from "react-icons/lu";

const LoaderOverlay = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
      <LuLoader2 className="animate-spin h-16 w-16 text-blue-500" />
    </div>
  );
};

export default LoaderOverlay;
