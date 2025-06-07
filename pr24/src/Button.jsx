




import React, { useContext } from "react";
import { countContext } from "./countContext";

export const Button = () => {
  const context = useContext(countContext);
  return <div>{context}</div>;
};