import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2"
import brand1 from "../assets/brand1.png";
import brand2 from "../assets/brand2.jpg";
import brand3 from "../assets/brand3.jpg";
import brand4 from "../assets/brand4.jpg";
import brand5 from "../assets/brand5.png";
import brand6 from "../assets/brand6.jpg";
import brand7 from "../assets/brand7.png";
import brand8 from "../assets/brand8.png";
import brand9 from "../assets/brand9.png";
import brand10 from "../assets/brand10.png";
import brand11 from "../assets/brand11.png";

const images = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
  brand10,
  brand11,
];

export default function BrandSlideBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(3); // Default 3 images for small screens

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleImages(6); // Show 6 images on large screens
      } else if (window.innerWidth >= 768) {
        setVisibleImages(4); // Show 4 images on medium screens
      } else {
        setVisibleImages(3); // Show 3 images on small screens
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = images.length - visibleImages;
        return prev < maxIndex ? prev + 1 : 0;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [visibleImages]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - visibleImages));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < images.length - visibleImages ? prev + 1 : 0));
  };

  return (
    <div className="w-full overflow-hidden ">
      <h1 className="text-start w-full my-2  ml-3 md:ml-6 text-xl font-bold text-orange-600">
        Hizmet Verilen Markalar
      </h1>
      <div className="relative w-full mx-auto  ">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex / images.length) * 100}%)`,
            width: `${(images.length / visibleImages) * 100}%`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="md:w-1/6 rounded-lg w-32 h-24  m-4 md:m-6 flex items-center ">
              <img src={image} alt={`brand-${index}`} className="w-full object-contain shadow-xl rounded-md" />
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
        >
          <HiOutlineArrowLeft/>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
        >
          <HiOutlineArrowRight/>
        </button>
      </div>
    </div>
  );
}
