import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import ReCAPTCHA from "react-google-recaptcha";
import { TiLocation } from "react-icons/ti";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 40.79402968128116,
  lng: 29.363464290941753,
};
const mapOptions = {
  mapTypeControl: false,
  zoomControl: false,
  streetViewControl: false,
};

export default function Contact() {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  return (
    <div className="container mx-auto p-4 md:p-10 max-w-6xl">
      <h2 className="text-3xl pb-3 text-start w-full">İletişim</h2>
      
      {/* Harita Alanı */}
      <div className="w-full rounded-lg overflow-hidden">
        <LoadScript googleMapsApiKey="AIzaSyC21iyuKrXyyiNcATnwgduReZXsizAad9E">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            options={mapOptions}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
      
   
      <div className="flex flex-col md:flex-row items-start justify-center gap-8 p-8">
        {/* Sol Taraf: İletişim Bilgileri */}
        <div className="w-full md:w-1/2 max-w-lg space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Bize Ulaşın</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 hover:bg-gray-100 rounded-lg p-4">
              <TiLocation className="text-blue-600 text-4xl" />
              <div>
                <h3 className="font-semibold">Adres</h3>
                <p className="text-gray-700">Emek mah. Ahmet Rasim Cad. Birdal Sok. No:4, Gebze/KOCAELİ</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 hover:bg-gray-100 rounded-lg p-4">
              <FaPhoneAlt className="text-blue-600 text-3xl" />
              <div>
                <h3 className="font-semibold">Telefon</h3>
                <a className="text-gray-700" href="tel:+905366709954">0 (536) 670 99 54</a>
              </div>
            </div>
            <div className="flex items-center space-x-3 hover:bg-gray-100 rounded-lg p-4">
              <IoMdMail className="text-blue-600 text-3xl" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a className="text-gray-700" href="mailto:info@guctekmakina.com">info@guctekmakina.com</a>
              </div>
            </div>
          </div>
        </div>
        
     
        <div className="w-full md:w-1/2 max-w-lg bg-blue-600 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Bize Yazın</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Ad-Soyad"
                className="p-3 w-full border-b border-gray-300 bg-transparent text-white placeholder-white focus:outline-none"
              />
              <input
                type="email"
                placeholder="E-Posta Adresi"
                className="p-3 w-full border-b border-gray-300 bg-transparent text-white placeholder-white focus:outline-none"
              />
            </div>
            <input
              type="tel"
              placeholder="Telefon Numarası"
              className="p-3 w-full border-b border-gray-300 bg-transparent text-white placeholder-white focus:outline-none"
            />
            <textarea
              placeholder="Mesajınız..."
              className="p-3 w-full border-b border-gray-300 bg-transparent text-white placeholder-white focus:outline-none h-24"
            ></textarea>
            
            <div className="flex flex-col space-y-4">
              <ReCAPTCHA className="w-full"
                sitekey="6LcKD8cqAAAAADaamaTzVNLLxgLeC3wS2BKSWItp"
                onChange={(value) => setCaptchaValue(value)}
              />
              <button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition"
              >
                GÖNDER
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
