// import React from "react";
// import Link from "next/link";

// const Header = () => {
//   return (
//     <nav className="flex items-center justify-between p-4 bg-white">
//       <a className="inline-block" href="/">
//         <img
//           className="w-[80px] h-auhref"
//           src="https://zetapp.in/_next/static/media/zet_new_logo.7adcc993.svg"
//           alt="Zet-logo"
//         />
//       </a>
//       <div className="flex items-center">
//         <a className="ml-4  text-[#596379] hover:text-blue-700" href="/">
//           Home
//         </a>
//         <a className="ml-4  text-[#596379] hover:text-blue-700" href="/about">
//           About Us
//         </a>
//         <a
//           className="ml-4  text-[#596379] hover:text-blue-700"
//           href="/partner-with-us"
//         >
//           Partner With Us
//         </a>
//         <a className="ml-4  text-[#596379] hover:text-blue-700" href="/blog">
//           Blog
//         </a>
//         <div className="ml-4">
//           <button className="px-4 py-2 text-white bg-[#2075f0] rounded">
//             Download ZET
//           </button>
//         </div>
//         <hr className=""/>
//       </div>
//     </nav>
//   );
// };

// export default Header;

"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white">
      <div className="max-w-[1390px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 flex items-center justify-between h-16 my-[6px]">
          <a className="inline-block" href="/">
            <img
              className="w-[90px] h-auto"
              src="https://zetapp.in/_next/static/media/zet_new_logo.7adcc993.svg"
              alt="Zet-logo"
            />
          </a>

          <div className="hidden sm:flex items-center">
            <a className="ml-4 text-[#596379] hover:text-blue-700" href="/">
              Home
            </a>
            <a
              className="ml-4 text-[#596379] hover:text-blue-700"
              href="/about"
            >
              About Us
            </a>
            <a
              className="ml-4 text-[#596379] hover:text-blue-700"
              href="/partner-with-us"
            >
              Partner With Us
            </a>
            <a className="ml-4 text-[#596379] hover:text-blue-700" href="/blog">
              Blog
            </a>
            <div className="ml-4">
              <button className="px-3 py-[4px] text-white bg-[#2075f0] rounded-xl">
                Download ZET
              </button>
            </div>
          </div>
          <div className="sm:hidden ml-6">
            <button
              type="button"
              className="text-gray-600 hover:text-[#63ace5] focus:outline-none"
              onClick={toggleMenu}
            >
              <img
                src="https://www.svgrepo.com/show/12219/menu.svg"
                alt="Toggle Menu"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="sm:hidden bg-[#63ace5]">
            <div className="flex justify-center space-y-2 mt-2">
              <div className="flex flex-col items-center">
                <a className="my-2 text-[#596379] hover:text-blue-700" href="/">
                  Home
                </a>
                <a
                  className="my-2 text-[#596379] hover:text-blue-700"
                  href="/about"
                >
                  About Us
                </a>
                <a
                  className="my-2 text-[#596379] hover:text-blue-700"
                  href="/partner-with-us"
                >
                  Partner With Us
                </a>
                <a
                  className="my-2 text-[#596379] hover:text-blue-700"
                  href="/blog"
                >
                  Blog
                </a>
                <div className="my-2">
                  <button className="px-4 py-2 text-white bg-[#2075f0] rounded">
                    Download ZET
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <hr />
    </nav>
  );
};

export default Header;
