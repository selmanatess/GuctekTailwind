import React, { useState, useEffect } from 'react';
import HomeBrand1 from '../assets/HomeBrand1.png';
import HomeBrand2 from '../assets/HomeBrand2.png';
import HomeBrand3 from '../assets/HomeBrand3.jpeg';
import HomeBrand4 from '../assets/HomeBrand4.jpeg';
import HomeBrand5 from '../assets/HomeBrand5.jpeg';
import HomeBrand6 from '../assets/HomeBrand6.png';

const brands = [
  { id: 1, logo: HomeBrand1 },
  { id: 2, logo: HomeBrand2 },
  { id: 3, logo: HomeBrand3 },
  { id: 4, logo: HomeBrand4 },
  { id: 5, logo: HomeBrand5 },
  { id: 6, logo: HomeBrand6 },
];

export default function HomeSlidebar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3 saniyede bir değişir

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setDirection('next');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length);
  };

  const prevSlide = () => {
    setDirection('prev');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + brands.length) % brands.length);
  };

  return (
    <div className="w-full flex flex-col items-center relative">
      <div className="relative w-full md:h-[600px] h-[220px] overflow-hidden">
        {/* Geçiş Animasyonu */}
        <div
          className={`w-full h-full flex transition-transform duration-700 ease-in-out ${
            direction === 'next' ? 'animate-slide-left' : 'animate-slide-right'
          }`}
        >
          <img
            src={brands[currentIndex].logo}
            alt="Brand"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Önceki Buton */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md"
          onClick={prevSlide}
        >
          ◀
        </button>

        {/* Sonraki Buton */}
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md"
          onClick={nextSlide}
        >
          ▶
        </button>
      </div>
    </div>
  );
}
