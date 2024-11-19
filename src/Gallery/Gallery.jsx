import React, { useState } from "react";
import ThreeDTextEffect from "../3-D Text/ThreeDTextEffect";
import gfg from '../Gallery/gfg1.png';
import python from '../Gallery/python1.png';
import c from '../Gallery/c1.png';
import gold from '../Gallery/gold1.png';
import silver from '../Gallery/silver1.png';
import fifty from '../Gallery/50day.png'
import './gallery.css'
import april from '../Gallery/april.png';
import { CSSTransition } from 'react-transition-group';
import Animatedbg from "../Animated Background/Animatedbg";
export default function Gallery() {
  const data = [
    { img: python, text: "5* in python awarded by Hackerrank" },
    { img: c, text: "C" },
    { img: gold, text: "Gold" },
    {img:april,text:"april"},
    { img: gfg, text: "GFG" },
    { img: silver, text: "Silver" },
    {img:fifty,text:"fifty"},
  ];

  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  return (
    <>
    <Animatedbg/>
    <div className="mt-14">
      <div className="pb-12" data-aos="fade-right">
        <ThreeDTextEffect title="Achievements"/>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 p-10 bottom-3" data-aos="fade-left">
        {data.map((item, index) => (
          <div key={index} className="relative" onClick={() => openModal(index)}>
            <img
              className="object-cover object-center w-full h-40 max-w-full rounded-lg cursor-pointer border border-red-50 shadow-2xl hover:shadow-md hover:ease-in duration-300 hover:shadow-blue-700"
              src={item.img}
              alt={item.text}
            />
          </div>
        ))}
      </div>
      <CSSTransition in={showModal} classNames="modal" timeout={300} unmountOnExit>
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-75 backdrop-blur-sm" onClick={closeModal}>
          <div className="relative max-w-[600px] max-h-[500px]" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-0 right-0 m-4 h-10 w-10 bg-opacity-55 text-white text-xl p-1 bg-slate-600 rounded-full" onClick={closeModal}>
              &times;
            </button>
            <button className="absolute top-1/2 transform -translate-y-1/2 left-0 m-4 text-white text-2xl" onClick={prevImage}>
              &#10094;
            </button>
            <button className="absolute top-1/2 transform -translate-y-1/2 right-0 m-4 text-white text-2xl" onClick={nextImage}>
              &#10095;
            </button>
            <img
              className="max-h-full max-w-full rounded-lg"
              src={data[currentIndex].img}
              alt={data[currentIndex].text}
            />
          </div>
        </div>
      </CSSTransition>
    </div>
    </>
  );
}

