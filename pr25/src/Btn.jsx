import React, { useContext } from "react";
import { theme } from "./App";

export const Btn = () => {
  const { isDark, setIsDark } = useContext(theme);
  function handleDark() {
    setIsDark(!isDark);
  }
  return (
    <>
      <button onClick={handleDark}>{isDark ? "light" : "dark"}</button>
    </>
  );
};
