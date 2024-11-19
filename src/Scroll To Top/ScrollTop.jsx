import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div className="fixed bottom-10 right-5 z-50">
      {isVisible && (
        <div className="shadow-lg hover:shadow-md hover:shadow-blue-700 bg-blue-500 bg-opacity-35 h-14 w-14 py-2 px-2 rounded-full">
        <div
          className="bg-white text-indigo-500 w-10 h-10 flex justify-center items-center rounded-full cursor-pointer shadow-md mb-1" 
          onClick={goToBtn}
        >
        <FaArrowUp className="animate-bounce text-lg"/>
        </div>
        </div>
      )}
    </div>
  );
};
export default GoToTop;
