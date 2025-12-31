import FigetSpinner from "@/components/FigetSpinner";
import React from "react";

const loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <FigetSpinner />
    </div>
  );
};

export default loading;
