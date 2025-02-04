import React, { useState } from "react";
import logo from "../assets/logo1.png";
import Button from "./Navbutton";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <nav className="bg-blue-700 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="bg-transparent w-auto flex flex-row items-center text-white">
          <img className="h-12" src={logo} alt="Logo" />
          <span
            className="text-2xl font-bold text-orange-300  pl-3"          
          > GÜÇTEK</span>
          <span className="text-2xl font-bold text-white  pl-2"> MAKİNA</span>
        </div>

        {/* Desktop Menu Items */}
        <div className="hidden md:flex z-10">
          {["Ana Sayfa", "Hakkımızda", "Hizmetlerimiz", "Ürünler", "İletişim"].map((page, index) => (
            <Button key={index} text={page} onClick={() => {}} />
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen
            ? "flex flex-col items-center justify-center"
            : "hidden"
        } bg-transparent`}
      >
        <a
          href="#"
          className="block text-2xl text-white hover:text-gray-300 p-2 border-b border-gray-300 w-full text-center hover:bg-orange-300 hover:rounded-md"
        >
          Ana Sayfa
        </a>

        <div
          onClick={() => setShowAboutUs(!showAboutUs)}
          className="flex flex-col border-b border-gray-300 w-full text-center text-white cursor-pointer"
        >
          <a
            href="#services"
            className="block text-2xl text-white hover:text-gray-300 p-2 text-center  hover:bg-orange-300 hover:rounded-md"
          >
            Kurumsal
          </a>
          {showAboutUs && (
            <div className="transition-opacity duration-500 ease-in-out opacity-100">
              <div className="py-1">Vizyonumuz</div>
              <div className="py-1">Misyonumuz</div>
            </div>
          )}
        </div>

        <div
          onClick={() => setShowServices(!showServices)}
          className="flex flex-col border-b border-gray-300 w-full text-center text-white cursor-pointer"
        >
          <a
            href="#services"
            className="block text-2xl text-white hover:text-gray-300 p-2 text-center  hover:bg-orange-300 hover:rounded-md"
          >
            Hizmetlerimiz
          </a>
          {showServices && (
            <div className="transition-opacity duration-500 ease-in-out opacity-100">
              <div className="py-1">Detay 1</div>
              <div className="py-1">Detay 2</div>
            </div>
          )}
        </div>

        <div
          onClick={() => setShowProduct(!showProduct)}
          className="flex flex-col border-b border-gray-300 w-full text-center text-white cursor-pointer"
        >
          <a
            href="#products"
            className="block text-2xl text-white hover:text-gray-300 p-2 text-center  hover:bg-orange-300 hover:rounded-md"
          >
            Ürünler
          </a>
          {showProduct && (
            <div className="transition-opacity duration-500 ease-in-out opacity-100">
              <div className="py-1">Pim</div>
              <div className="py-1">Burç</div>
            </div>
          )}
        </div>

        <div
          onClick={() => setShowContact(!showContact)}
          className="flex flex-col  w-full text-center text-white cursor-pointer"
        >
          <a
            href="#contact"
            className="block text-2xl text-white hover:text-gray-300 p-2 text-center  hover:bg-orange-300 hover:rounded-md"
          >
            İletişim
          </a>
          {showContact && (
            <div className="transition-opacity duration-500 ease-in-out opacity-100">
              <div className="py-1">E-posta</div>
              <div className="py-1">Telefon</div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
