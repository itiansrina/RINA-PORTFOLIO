import { useEffect, useState } from "react";
import { FaSun } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";

export default function Mode() {
    const [theme, setTheme] = useState("dark-theme");

    const toggle = () => {
        if (theme === "light-theme") {
            setTheme("dark-theme");
        } else {
            setTheme("light-theme");
        }
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <>
            <button onClick={() => toggle()}>
                {theme === "dark-theme" ? (
                     <div className="bg-slate-500 rounded-full p-2 text-white bg-opacity-70 shadow-lg">
                     <FaSun className="text-lg" /></div>
                ) : (
                   
                    <div className="bg-gray-200 rounded-full p-2 text-gray-600 shadow-lg">
                    <IoMdMoon className="text-lg " /></div>
                )}
                
            </button>
        </>
    );
}

