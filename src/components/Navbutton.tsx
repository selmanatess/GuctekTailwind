import React, { useState, useRef } from 'react';
import '../styles/Navbutton.css';
import '../styles/itembutton.css';

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Liste tanımları
  const aboutus = ["Vizyonumuz", "Misyonumuz"];
  const products = ["Burç", "Pim", "Mil", "Boru"];
  const contact = ["İletişim", "Adres", "Telefon", "Mail"];

  // Listeyi text'e göre seçme
  const getItemsByText = (buttonText: string) => {
    switch (buttonText) {
      case "Hakkımızda":
        return aboutus;
      case "Ürünler":
        return products;
      case "İletişim":
        return contact;
      default:
        return [];
    }
  };

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsOpen(false);
    }, 50);
    setTimeoutId(id);
  };

  const items = getItemsByText(text);

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        ref={buttonRef}
        className="app-button"
        onClick={onClick}
      >
        <span>{text}</span>
      </button>
      {isOpen && items.length > 0 && (
      <div
      className="absolute bg-blue-600 border-gray-200 rounded-md shadow-lg ml-1 opacity-90 min-w-[150px] flex justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul className="p-2 text-center w-full">
        {items.map((item, index) => (
        <li key={index} className="py-1 w-full">
         <button 
           
           className=" text-white hover:text-gray-200 block w-full item-button "
           onClick={onClick}
         >
           <a>{item}</a>
         </button>
         {index < items.length - 1 && (
           <div className="border-b border-gray-300 w-full pb-1"></div>
         )}
       </li>
        ))}
      </ul>
    </div>
    
     
      )}
    </div>
  );
};

export default Button;
