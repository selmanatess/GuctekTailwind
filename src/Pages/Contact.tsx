import React from 'react'
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 40.79402968128116,
  lng:  29.363464290941753,
};
const mapOptions = {
  mapTypeControl: false, // Harita / Uydu butonunu kaldırır
  zoomControl: false, // + / - yakınlaştırma butonlarını kaldırır
  streetViewControl: false, // İnsan simgesini kaldırır (Street View)
 // Fullscreen butonunu kaldırır
};
export default function Contact() {
  return (
    <div className=' p-10 w-full  flex flex-col '>
           <h2 className='
            text-3xl pb-3'>İletişim</h2>
            <div className=' rounded-lg'><LoadScript googleMapsApiKey="AIzaSyC21iyuKrXyyiNcATnwgduReZXsizAad9E">
      <GoogleMap  mapContainerStyle={containerStyle} center={center} zoom={12} options={mapOptions}>
        {/* Marker Eklemek İçin */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript></div>
    <div className="flex flex-col md:flex-row items-start justify-center gap-8 p-8 max-w-5xl mx-auto">
      {/* Sol Taraf: İletişim Bilgileri */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Bize Ulaşın</h2>

        <div className="space-y-4">
          {/* Adres */}
          <div className="flex items-start space-x-3">
            <span className="text-yellow-500 text-xl">📍</span>
            <div>
              <h3 className="font-semibold">Adres</h3>
              <p className="text-gray-700">
                Üçevler Mh. Ahıska Cd. Şahin Sk. No:7/1.1 <br />
                Nilüfer/BURSA
              </p>
            </div>
          </div>

          {/* Telefon */}
          <div className="flex items-center space-x-3">
            <span className="text-yellow-500 text-xl">📞</span>
            <div>
              <h3 className="font-semibold">Telefon</h3>
              <p className="text-gray-700">+90224 441 25 42</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3">
            <span className="text-yellow-500 text-xl">✉️</span>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-700">info@mbaatasman.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sağ Taraf: Form */}
      <div className="w-full md:w-1/2 bg-blue-600 p-6 rounded-lg">
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

          {/* reCAPTCHA ve Gönder Butonu */}
          <div className="flex flex-col space-y-4">
            <div className="bg-white p-3 rounded-md shadow-md text-gray-600 text-center">
              [reCAPTCHA Buraya Gelecek]
            </div>

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
   
  )
}
