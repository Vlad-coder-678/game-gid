import React from "react";
import { useSelector } from "react-redux";

const Title = () => {
  const title = useSelector((state) => state.api.title);

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
