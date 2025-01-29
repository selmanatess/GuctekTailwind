import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

export default function Getoffer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    request: "",
    message: "",
  });
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Lütfen reCAPTCHA doğrulamasını tamamlayın!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/verify-captcha", { token: captchaValue });
      
      const data = response.data as { success: boolean };
      if (data.success) {
        console.log("Başarılı doğrulama ✅", response.data);
        alert("Form başarıyla gönderildi!");
      } else {
        alert("reCAPTCHA doğrulaması başarısız ❌");
      }
    } catch (error) {
      console.error("Hata:", error);
      alert("Bir hata oluştu.");
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="p-4 rounded-lg shadow-lg w-full max-w-5xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-6">Fiyat Teklifi Alın</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="name" placeholder="Ad-Soyad" value={formData.name} onChange={handleChange} className="p-3 border-b-2 border-gray-400 focus:border-blue-500 outline-none resize-none w-full" />
            <input type="email" name="email" placeholder="E-Posta Adresi" value={formData.email} onChange={handleChange} className="p-3 border-b-2 border-gray-400 focus:border-blue-500 outline-none resize-none w-full" />
            <input type="text" name="company" placeholder="Firma Adı" value={formData.company} onChange={handleChange} className="p-3 border-b-2 border-gray-400 focus:border-blue-500 outline-none resize-none w-full" />
            <input type="text" name="request" placeholder="Ürün/Hizmet/Proje Talebiniz" value={formData.request} onChange={handleChange} className="p-3 border-b-2 border-gray-400 focus:border-blue-500 outline-none resize-none w-full" />
            <input type="tel" name="phone" placeholder="Telefon Numarası" value={formData.phone} onChange={handleChange} className="p-3 border-b-2 border-gray-400 focus:border-blue-500 outline-none resize-none w-full" />
          </div>
          <textarea name="message" placeholder="Mesajınız..." value={formData.message} onChange={handleChange} className="p-3 border-b-2 border-gray-400 focus:border-blue-500 outline-none resize-none w-full" />
          
          {/* reCAPTCHA Alanı */}
          <div className="flex justify-center">
          <ReCAPTCHA
    sitekey="6LcKD8cqAAAAADaamaTzVNLLxgLeC3wS2BKSWItp"
    onChange={(value) => setCaptchaValue(value)}
  />
          </div>

          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Gönder</button>
        </form>
      </div>
    </div>
  );
}
