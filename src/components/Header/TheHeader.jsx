import React, { useEffect } from 'react';

export default function TheHeader() {
  useEffect(() => {
    const handleClickOutsideMenu = (event) => {
      const menu = document.getElementById("menu");
      const menuToggle = document.getElementById("menuToggle");
      if (menu && menuToggle && !menu.contains(event.target) && event.target !== menuToggle) {
        if (menu.style.display === "block") {
          menu.style.display = "none";
        }
      }
    };

    const handleMenuToggleClick = () => {
      const menu = document.getElementById("menu");
      if (menu) {
        if (menu.style.display === "none") {
          menu.style.display = "block";
        } else {
          menu.style.display = "none";
        }
      }
    };

    document.addEventListener("click", handleClickOutsideMenu);
    const menuToggle = document.getElementById("menuToggle");
    if (menuToggle) {
      menuToggle.addEventListener("click", handleMenuToggleClick);
    }

    return () => {
      document.removeEventListener("click", handleClickOutsideMenu);
      if (menuToggle) {
        menuToggle.removeEventListener("click", handleMenuToggleClick);
      }
    };
  }, []);

  return (
    <div>
      <header style={{ fontFamily: 'Oswald, sans-serif' }} className="mx-auto">
        <div className="flex justify-between items-center h-[80px]">
          <div className="lg:ml-[150px]">
            <p className="text-gray-400 text-[32px] ">logo</p>
          </div>
          <div className='lg:mr-[76px]'>
            <img
              id="menuToggle"
              className="relative"
              width="25"
              height="25"
              src="https://img.icons8.com/ios/50/menu--v1.png"
              alt="menu--v1"
            />
          </div>
        </div>
      </header>
      <div id="menu" className="absolute bottom-0 lg:left-0 w-[300px] h-screen bg-black p-4 hidden">
        <ul className="text-red-500 space-y-4 text-center">
          <li><a href="#" className="hover:text-red-700">Home</a></li>
          <li><a href="#" className="hover:text-red-700">About</a></li>
          <li><a href="#" className="hover:text-red-700">Blog</a></li>
        </ul>
      </div>
    </div>
  );
}