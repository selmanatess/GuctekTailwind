import React from "react";

export default function HowDoes() {
  return (
    <div className="w-full overflow-hidden">
      <h1 className="w-full text-center md:text-start text-xl md:text-2xl lg:text-3xl font-bold text-orange-600 mt-6 mb-3 md:ml-6">
        Nasıl Çalışıyoruz?
      </h1>
      <div className="flex flex-col md:flex-row flex-wrap justify-between items-center">
        <div className="w-full md:w-1/3 p-4  flex items-center justify-center">
          <div className=" border border-5 border-orange-400 rounded-xl shadow-2xl flex flex-row items-center justify-around  md:min-h-40 min-h-20 md:transition-transform duration-300 md:hover:scale-110 ">
            <div className="w-2/3 text-center md:text-7xl text-4xl h-full text-orange-400 m-3">
              1
            </div>
            <p className="m-3 md:textlg text-sm">
            Hangi ürüne veya hizmete, hangi zaman aralığında ihtiyacınız olduğunu belirleyerek talebinizi iletirsiniz.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4  flex items-center justify-center ">
          <div className=" border border-5 border-orange-400 rounded-xl shadow-2xl flex flex-row items-center justify-around  md:min-h-40 min-h-20 md:transition-transform duration-300 md:hover:scale-110 ">
            <div className="w-2/3 text-center md:text-7xl text-4xl h-full text-orange-400 m-3">
              2
            </div>
            <p className="m-3 md:textlg text-sm">
            Talebiniz değerlendirilir, stok veya hizmet uygunluğu kontrol edilir ve size geri dönüş yapılarak onay süreci tamamlanır.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4  flex items-center justify-center">
          <div className=" border border-5 border-orange-400 rounded-xl shadow-2xl flex flex-row items-center justify-around  md:min-h-40 min-h-20 md:transition-transform duration-300 md:hover:scale-110 ">
            <div className="w-2/3 text-center md:text-7xl text-4xl h-full text-orange-400 m-3">
              3
            </div>
            <p className="m-3 md:textlg text-sm">
            Onaylanan talep, belirlenen zaman çerçevesinde size ulaştırılır veya hizmet sağlanır, ardından süreç tamamlanır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
