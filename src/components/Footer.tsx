import React from "react";
import logo from "../assets/logo.png";
import { IoIosMail } from "react-icons/io";
import { HiChevronDoubleRight } from "react-icons/hi";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
const routes: { label: string; route: string }[] = [
  { label: "Hakkımızda", route: "/hakkimizda" },
  { label: "Hizmetlerimiz", route: "/hizmetlerimiz" },
  { label: "Ürünler", route: "/urunler" },
  { label: "İletişim", route: "/iletisim" }
];
export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 ">
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4"> Firma</h3>
          <div className="flex bg-transparent w-full p-2 items-center justify-center">
            <img className="h-30 w-52 aspect-auto" src={logo} alt="Logo" />
            
          </div>
<div className="border-t border-gray-300 w-full mt-2"></div>
          <p className="md:text-sm text-xs  text-justify mt-4 mx-5 md:mx-0 ">
            Her türlü kullanım hakkı saklıdır. Bu sitede yer alan resim ve
            metinler Güçtek Makina Ltd. Şti.'ne aittir. Marka logoları marka
            sahiplerine aittir.
          </p>
        </div>

        <div className="flex flex-col items-center ">
          <h3 className="text-lg font-semibold mb-4">Kurumsal</h3>

          <div className="flex flex-col items-center justify-center h-full w-full space-y-3">
  {routes.map((item, index) => (
    <div key={index} className="flex flex-col items-start w-8/12  hover:text-bg-orange-300">
      <a
        onClick={() => window.location.replace(item.route)}
        className="flex flex-row items-center space-x-2 transition-transform duration-200 hover:scale-110"
      >
        <HiChevronDoubleRight className="text-white md:w-7 md:h-7 h-4 w-4  hover:text-orange-300" />
        <p className="  md:text-base text-sm hover:text-orange-300">{item.label}</p>
      </a>
      {index < 3 && <div className="border-t border-gray-300 w-full mt-2"></div>}
    </div>
  ))}
</div>

        </div>

        <div className="flex flex-col  items-center">
          <h3 className="text-lg font-semibold mb-4">İletişim Bilgilerimiz</h3>

          <div className="flex flex-row items-start justify-start pt-3 w-4/6  hover:text-orange-300 transition-transform duration-200 hover:scale-110">
            <IoIosMail
             className="w-6 h-6"
            ></IoIosMail>
            <a className="pl-2 md:text-base text-sm " href="mailto:info@guctekmakina.com">
              info@guctekmakina.com
            </a>
          </div>
          <div className="border-t border-gray-300 w-8/12  md:w-8/12 mt-2"></div>
          <div className="flex flex-row items-start justify-start w-4/6  mt-2 pt-2 hover:text-orange-300 transition-transform duration-200 hover:scale-110">
            <FaPhoneAlt
             className="w-6 h-6"
            ></FaPhoneAlt>
            <a className="pl-2 md:text-base text-sm transition-transform duration-200 hover:scale-110" href="tel:+905366709954">
              {" "}
              0(536) 670 99 54
            </a>
          </div>
          <div className="border-t border-gray-300 w-8/12  md:w-8/12 mt-2"></div>
          <div className="flex flex-row items-start justify-start mt-2 pt-2  w-4/6 hover:text-orange-300 transition-transform duration-200 hover:scale-110">
            <IoLocation
           className="md:w-12 md:h-12  w-6 h-6 "
            ></IoLocation>
            <a
              className="pl-2 md:text-base text-sm "
              href="https://maps.app.goo.gl/14sgsspdSDYYmowV8?g_st=iw"
            >
            
              Emek mah. Ahmet rasim cad. Birdal sok. No 4
            </a>
          </div>
         
        </div>
      </div>

      <div className="border-t border-gray-300 mt-5 pt-2 text-center text-sm">
        <p>
          &copy; 2025{" "}
          <a target="_blank" href="https://selmanates.com/">
            Selman ATEŞ
          </a>{" "}
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
