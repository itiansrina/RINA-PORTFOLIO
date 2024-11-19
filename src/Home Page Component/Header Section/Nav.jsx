import React, { useState } from "react";
import kw from "../Header Section/logo1.png";
import resume from "../Header Section/Rina Kushwaha Resume.pdf";
import Mode from "../../Theme Changer/ThemeChanger";
import { Link } from "react-router-dom";
export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle("no-scroll");
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <>
      <nav
        style={{
          backgroundColor: "var(--bg-clr)",
          backdropFilter: "blur(10px)",
        }}
        className="sticky top-0 z-50 bg-slate-900"
      >
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <button
                type="button"
                onClick={toggleMobileMenu}
                className=" relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen ? "true" : "false"}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed. */}
                <svg
                  className={
                    isMobileMenuOpen ? "hidden h-6 w-6" : "block h-6 w-6"
                  }
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* Icon when menu is open. */}
                <svg
                  className={
                    isMobileMenuOpen ? "block h-6 w-6" : "hidden h-6 w-6"
                  }
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div
                className="flex flex-shrink-0 items-center bg-slate-900 rounded-full"
                style={{ backgroundColor: "var(--bg-color)" }}
              >
                <Link to="/" className="text-white font-serif font-extrabold">
                  <img className="h-14 w-auto" src={kw} alt="Rina" />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4 mt-2">
                  <Link to={resume} download target="_blank">
                    <button
                      className="animate-pulse bg-indigo-500 text-white font-medium py-2 px-4 rounded-md inline-flex items-center"
                      onClick={closeMobileMenu}
                    >
                      <svg
                        className="fill-current w-4 h-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                      </svg>
                      <span className="text-sm">Download Resume</span>
                    </button>
                  </Link>
                  <Link
                    to="/project"
                    style={{ color: "var( --text-color)" }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "var(--bg-hover)")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "transparent")
                    }
                    className="  rounded-md px-3 py-2 text-sm font-medium"
                    onClick={closeMobileMenu}
                  >
                    My Projects
                  </Link>
                  <Link
                    to="/experience"
                    style={{ color: "var( --text-color)" }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "var(--bg-hover)")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "transparent")
                    }
                    className=" rounded-md px-3 py-2 text-sm font-medium"
                    onClick={closeMobileMenu}
                  >
                    Experience
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3">
                <div data-oas="fade-left">
                  <Mode />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        <div
          className={isMobileMenuOpen ? "block sm:hidden" : "hidden sm:hidden"}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href={resume} download target="_blank" onClick={closeMobileMenu}>
              <button className="animate-pulse bg-indigo-500 text-white font-medium py-2 px-4 rounded-md inline-flex items-center">
                <svg
                  className="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Download CV</span>
              </button>
            </a>
            <Link
              to="/project"
              style={{ color: "var( --text-color)" }}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = "var(--bg-hover)")
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "transparent")
              }
              className=" block rounded-md px-3 py-2 text-base font-medium"
              onClick={closeMobileMenu}
            >
              My Projects
            </Link>
            <Link
              to="/experience"
              style={{ color: "var( --text-color)" }}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = "var(--bg-hover)")
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "transparent")
              }
              className="block rounded-md px-3 py-2 text-base font-medium"
              onClick={closeMobileMenu}
            >
              Experience
            </Link>
            <Link
              to="/gallery"
              style={{ color: "var( --text-color)" }}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = "var(--bg-hover)")
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "transparent")
              }
              className="block rounded-md px-3 py-2 text-base font-medium"
              onClick={closeMobileMenu}
            >
              Achievements
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
