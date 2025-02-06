import React from "react";

export default function Products() {
  return (
    <div>
      <div className="border-b-2 border-orange-600 w-fit mx-auto md:mx-0 md:ml-8">
        <h3 className="text-center md:text-start text-lg md:text-xl lg:text-2xl font-bold text-orange-600 mt-8 mb-1">
          Pim
        </h3>
      </div>
      <div className="md:mx-8 md:my-5 mx-3 my-3">
        <p className=" text-sm md:text-base">
          {"  "}
          İş makinelerinde kullanılan pim, makinelerin hareketli parçalarını
          güvenli bir şekilde birleştirip, doğru hareket etmelerini sağlayan
          kritik bir bağlantı elemanıdır. Dayanıklı malzemelerden üretilen
          pimler, yüksek yük taşıma kapasitesine sahip olup, makinenin stabil ve
          verimli çalışmasını mümkün kılar. Hareketli sistemlerde pimin
          sağladığı bağlantılar, makinelerdeki dinamik yüklerin doğru bir
          şekilde dağılmasını sağlar ve böylece aşınmayı önler, uzun ömürlü
          kullanım sunar.
        </p>
      </div>
      <div className="mt-3 md:mx-8 grid grid-cols-6 gap-4">
        <div className="bg-blue-600">1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>
    </div>
  );
}
