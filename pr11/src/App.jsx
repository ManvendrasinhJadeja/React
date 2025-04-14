import React, { useEffect } from "react";
import { useState } from "react";

export const App = () => {
  const [IsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let time1 = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    let time2 = setTimeout(() => {
      clearTimeout(time1);
      setIsOpen(false);
    }, 10000);

    return () => {
      clearTimeout(time1);
      clearTimeout(time2);
    };
  }, []);

  return (
    <>
      <div
        onClick={() => setIsOpen(() => false)}
        className="min-h-screen w-full flex justify-center items-center  flex-col"
      ></div>

      <div className="backdrop w-full h-auto flex justify-center items-center absolute top-[50%] left-[50%] translate-[-50%] flex-col">
        {IsOpen && (
          <div className="steps w-[400px] h-[200px] bg-[black] flex justify-center items-center relative px-4">
            <div
              className="close  text-[50px] text-white absolute top-0 right-10 "
              onClick={() => setIsOpen(() => false)}
            >
              &times;
            </div>
            <button
              onClick={() => setIsOpen(() => false)}
              className="w-[100px] h-[50px] bg-[white] text-[black]"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </>
  );
};
export default App;
