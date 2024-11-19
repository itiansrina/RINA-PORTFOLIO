import mh from "../Projects/mh.png";
import amazon from "../Projects/amazon.png";
import bb from "../Projects/bb.png";

import w from "../Projects/w.png";
import rina from "../Projects/rina.png";
import ThreeDTextEffect from "../3-D Text/ThreeDTextEffect";
import Animatedbg from "../Animated Background/Animatedbg";
import { useState } from "react";
export default function Project() {
  const [items, setItems] = useState(data);
  const filterItem = (cate) => {
    const updatedItems = data.filter((currentItem) => {
      return currentItem.category === cate;
    });
    setItems(updatedItems);
  };
  return (
    <>
      <Animatedbg />
      <div className="container my-12 mx-auto md:px-3 content-center">
        <section className="mb-12 text-center">
          <div className="mb-16 pb-2 mt-12 " data-aos="fade-right">
            <ThreeDTextEffect title="Project" />
          </div>
          <div
            style={{ backgroundColor: "var(--bg-color)" }}
            className="shadow-lg hover:shadow-full hover:shadow-blue-700 mb-20 h-14 bg-slate-900 py-2 border border-white sm:w-1/2 w-full m-auto rounded-xl"
            data-aos="fade-left"
          >
            <button
              type="button"
              className="text-white focus:outline-none hover:bg-slate-300 hover:border-b-2 py-2 px-3.5 hover:bg-opacity-20 font-medium rounded-full text-sm text-center"
              onClick={() => setItems(data)}
            >
              All
            </button>

            <button
              type="button"
              className="text-white focus:outline-none hover:bg-slate-300 hover:border-b-2 py-2 px-3.5 hover:bg-opacity-20 font-medium rounded-full text-sm text-center"
              onClick={() => filterItem("JS,HTML,CSS")}
            >
              JS+HTML+CSS
            </button>
            <button
              type="button"
              className="text-white focus:outline-none hover:bg-slate-300 hover:border-b-2 py-2 px-3.5 hover:bg-opacity-20 font-medium rounded-full text-sm text-center"
              onClick={() => filterItem("React")}
            >
              React
            </button>
            <button
              type="button"
              className="text-white focus:outline-none hover:bg-slate-300 hover:border-b-2 py-2 px-3.5 hover:bg-opacity-20 font-medium rounded-full text-sm text-center"
              onClick={() => filterItem("JAVA")}
            >
              JAVA
            </button>
          </div>
          <div
            className="grid gap-6 lg:grid-cols-3 xl:gap-x-8 ml-24 "
            data-aos="fade-left"
          >
            {items.map((d, index) => (
              <div key={index} className="mb-6 lg:mb-0 w-3/4 ">
                <div
                  style={{
                    backgroundColor: "var(--bg-clri)",
                    color: "var(--font)",
                  }}
                  className="  hover:shadow-full hover:shadow-blue-700 mb-16 relative block rounded-lg text-gray-300 bg-slate-900 bg-opacity-20text-gray-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
                >
                  <div className="flex justify-center">
                    <div
                      className="relative mx-2 -mt-2  h-[150px] overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <img src={d.img} className="w-full" />
                      <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                      </a>
                    </div>
                  </div>
                  <div className="p-4">
                    <h5 className="mb-4 text-md font-bold">{d.title}</h5>
                    <p className="mb-8 text-sm">{d.disc}</p>
                    <a
                      href={d.git}
                      style={{ color: "var(--font)" }}
                      target="_blank"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      className="inline-block rounded-full bg-primary px-4 pb-1.5 pt-1.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                      GITHUB
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a
                      href={d.live}
                      style={{ color: "var(--font)" }}
                      target="_blank"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      className="inline-block rounded-full bg-primary px-4 pb-1.5 pt-1.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
const data = [
  {
    title: "Amazon clone",
    disc: "For getting hand's on experiance on making real world project using html,css,and js. ",
    img: amazon,
    git: "https://github.com/itiansrina/Amazon_Clone",
    category: "JS,HTML,CSS",
    live: "https://itiansrina.github.io/Amazon_Clone/",
  },
  {
    title: "Mental health",
    disc: "Developed a Mental Health Prediction Model to identify conditions such as depression, anxiety, PTSD, and insomnia at an early stage. This project uses machine learning techniques for accurate predictions based on user input.",
    img: mh,
    git: "https://github.com/itiansrina/mental-health",
    category: "JS,HTML,CSS",
    live: " https://itiansrina.github.io/mental-health/",
  },
  {
    title: "Blood Bank",
    disc: "Developed a Mental Health Prediction Model to identify conditions such as depression, anxiety, PTSD, and insomnia at an early stage. This project uses machine learning techniques for accurate predictions based on user input.",
    img: bb,
    git: "https://github.com/itiansrina/blood-bank",
    category: "JAVA",
    live: " https://itiansrina.github.io/blood-bank/",
  },

  {
    title: "Wheather-App",
    disc: "This tool helps individuals to access weather information conveniently and in real-time Users can quickly view current weather conditions including humidity, wind speed, temperature and direction, visibility, and air pressure.",
    img: w,
    git: "https://github.com/itiansrina",
    category: "React",
  },

  {
    title: "My-Portfolio",
    disc: "It is a Personal Portfolio Website That Showcases My Skills, Education, Experience And Projects. It Helps Others To Get To Know Me Better.",
    img: rina,
    git: "https://github.com/itiansrina",
    category: "React",
  },
];
