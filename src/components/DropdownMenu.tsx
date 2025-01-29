import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    // Menü açılır
    if (timeoutId) {
      clearTimeout(timeoutId); // Önceki zaman aşımını iptal et
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // Menü kapanması için 1 saniye bekle
    const id = setTimeout(() => {
      setIsOpen(false);
    }, 500);
    setTimeoutId(id); // Zaman aşımını sakla
  };

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Menü
      </button>

      {isOpen && (
        <div
          className="absolute w-48 bg-blue-600 border-gray-200 rounded-md shadow-lg"
          onMouseEnter={handleMouseEnter}  // Fare menü üzerine geldiğinde menü açılır
          onMouseLeave={handleMouseLeave}  // Fare menüden ayrıldığında menü kapanır
        >
          <ul className="py-2">
            <li className="px-4 py-2 text-white hover:bg-orange-300">Item 1</li>
            <li className="px-4 py-2 text-white hover:bg-orange-300">Item 2</li>
            <li className="px-4 py-2 text-white hover:bg-orange-300">Item 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
